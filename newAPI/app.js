const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
// Set up the express app
const app = express();

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
  socket.on('attack', function(type){
    io.emit('attack','attaque reçue');
    /**
     * Changer la valeur de la fonction pour l'attaque .
    */
    //io.emit(type.room,attackAction(type));
    //io.emit(type.room+'bet',attackAction(type));
  });
  /**
   * Rejoindre la salle
   */
  socket.on('room',function(room){
    if(room.combat==true)
    {
      socket.join(room);
    }
    else
    {
      socket.join(room+'bet');
    }
  });

  /**
 * Envoi de message sur le chat de paris.
 */

  socket.on('betchat',function(message){
    
    io.emit(message.room,message.msg);
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
