const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const roomControl = require('./server/controllers/room')
const butterflyControl = require('./server/controllers/butterfly')
// const chatControl= require('./controllers/chat')
// Set up the express app
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
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
io.on('connection', function(socket)
{
  /**
   * Reception d'attaque et envoie de la notification au client.
   */
  socket.on('attack', function(attackinfo,fn){

    //io.emit(type.room+'bet',attackAction(type));
  });
  /**
   * Rejoindre la salle
   */
  socket.on('room',function(requestroom,fn){
    if(requestroom.combat==true)
    {
      if(!roomControl.checkIfAnyRoomWithoutTwoPeople)
      {
        const butterfly=butterflyControl.generate().data
        const clientroom=roomControl.create(butterfly);
        socket.join(clientroom.name);
        const response={code:201,room:clientroom};
        fn(response);
      }
      else
      {
        const clientroom=roomControl.findFirstBattleRoom;
        socket.join(clientroom.name);
        const response={code:202,room:clientroom};
        fn(response);
      }
    }
    else
    {
      const clientroom=roomControl.joinABetRoom;
      socket.join(clientroom.name);
      const response={code:202,room:clientroom};
      fn(response);
    }
  });

  /**
 * Envoi de message sur le chat de paris.
 */

  socket.on('betchat',function(message){
    if(chatControl.isInsult(message.msg))
    {
      chatControl.storeMessage(message.author,message.msg);
      io.to(message.room).emit('newMessage',{
        message:message.msg,
        author:message.author
      });
    }
    else
    {
      const punition="N'a pas insulté ses adversaires";
      chatControl.storeMessage(message.author,punition);
      io.to(message.room).emit('newMessage',{
        message:punition,
        author:message.author
      });
    }

  });
/**
 * Reception de paris.
 */
  socket.on('bet',function(bet)
  {
    io.emit('bet','Pari reçu');
    /**
     * Changer la valeur de la fonction pour le pari .
    */
    //io.emit('bet',betAction(bet));
  })
});
/**
 * Lancement de l'écoute de notre serveur
 */
http.listen(port,function(){
  console.log('Le serveur socket io est prêt');
});
module.exports = app;
