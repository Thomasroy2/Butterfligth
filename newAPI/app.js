// import { setInterval } from 'timers';
const setInterval = require('timers').setInterval;
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const roomControl = require('./server/controllers/room');
const betControl = require('./server/controllers/bet');
const Room = require('./server/models').room;
const fighterControl = require('./server/controllers/fighter');
// const chatControl= require('./controllers/chat')
// Set up the express app
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3001;
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));
/**
* connexion au lancement de l'application
*/
io.on('connection', function (socket) {
  /**
  * Reception d'attaque et envoie de la notification au client.
  */
  socket.on('attack', function (attackinfo, fn) {
    roomControl.attackIo(attackinfo).then(
      (roomInfo) => {
        socket.to(roomInfo.id).emit('attackUsed', roomInfo);
        fn(roomInfo);
      }
    );
    //io.emit(type.room+'bet',attackAction(type));
  });
  /**
  * Rejoindre la salle
  */
  socket.on('room', function (requestroom, fn) {
    if (requestroom.combat == true) {
      Room.findOne({ where: { butterfly2: null } }).then(
        (foundRoom) => {
          if (!foundRoom) {
            let clientroom;
            fighterControl.generateIo().then(
              (fighter) => {
                roomControl.createIo(fighter).then(
                  (createdRoom) => {
                    let partialRoomInfos = createdRoom.dataValues;
                    roomControl.retrieveIo(partialRoomInfos.id).then(
                      (roomInfos) => {
                        socket.join(roomInfos.id);
                        const response = { code: 201, room: roomInfos };
                        fn(response);
                      });
                  }
                );
              }
            );
          } else {
            fighterControl.generateIo().then(
              (fighter) => {
                foundRoom.update({ butterfly2: fighter.id }).then(
                  (newRoomInfos) => {
                    roomControl.retrieveIo(newRoomInfos.id).then(
                      (data) => {
                        socket.join(data.id);
                        const response = { code: 202, room: data };
                        console.log(data);
                        socket.to(data.id).emit('newPlayer', data);
                        fn(response);
                      }
                    );
                  }
                );
              }
            );
          }
        }
      )
    }
    else {
      const clientroom = roomControl.joinABetRoom;
      socket.join(clientroom.name);
      const response = { code: 202, room: clientroom };
      fn(response);
    }
  });

  /**
  * Envoi de message sur le chat de paris.
  */

  socket.on('betchat', function (message) {
    // if (!chatControl.isInsult(message.msg)) {
      //chatControl.storeMessage(message.author, message.msg);
      socket.to(message.room).emit('newMessage', {
        message: message.msg,
        author: message.author
      });
    // }
    // else {
    //   //chatControl.storeMessage(message.author, punition);
    //   socket.to(message.room).emit('newMessage', {
    //     message: "A insulté les autres parieurs",
    //     author: message.author
    //   });
    // }

  });
  /**
  * Reception de paris.
  */
  socket.on('bet', function (bet,fn) {
    betControl.newBet(bet).then((newBet)=>{
      socket.to(newBet.room).emit('newBet',newBet);
      fn(newBet);
    })
  })
});
/**
* Lancement de l'écoute de notre serveur
*/
http.listen(port, function () {
  console.log('Le serveur socket io est prêt');
});
module.exports = app;
