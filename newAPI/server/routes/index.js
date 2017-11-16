const butterflyController = require('../controllers').butterfly;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Butterflight API!',
  }));

  app.get('/api/butterfly/:bfId', butterflyController.retrieve);

  app.get('/api/butterfly', butterflyController.generate);

};
