const butterflyController = require('../controllers').butterfly;
const roomController = require('../controllers').room;
const fighterController = require('../controllers').fighter;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Butterflight API!',
  }));

  app.get('/api/butterfly/:bfId', butterflyController.retrieve);

  app.get('/api/butterfly', butterflyController.generate);

   app.post('/api/room/new', roomController.create);

   app.get('/api/room/:roomId', roomController.retrieve);

   app.post('/api/room/:roomId/bet', roomController.newBet);

   app.post('/api/room/:roomId/editLife1', roomController.editLife1);

   app.post('/api/room/:roomId/editLife2', roomController.editLife2);

   app.get('/api/fighter/:fighterId', fighterController.retrieve2);

};
