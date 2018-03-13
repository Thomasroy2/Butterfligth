const butterflyController = require('../controllers').butterfly;
const roomController = require('../controllers').room;
const fighterController = require('../controllers').fighter;
const battleLogsController = require('../controllers').battleLogs;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Butterflight API!',
  }));

  app.get('/api/butterfly/:bfId', butterflyController.retrieve);

  app.get('/api/butterfly', butterflyController.generate);

   app.post('/api/room/new', roomController.create);

   app.get('/api/room/:roomId', roomController.retrieve);

   app.post('/api/fighter/new', fighterController.generate);

   app.post('/api/room/attack', roomController.attack);

   app.get('/api/fighter/:fighterId', fighterController.retrieveIo);

};
