const butterfly = require('../models').butterfly;
const skill = require('../models').skill;
const Room = require('../models').room;

console.log(Room);


module.exports = {

  create(req, res) {

    console.log(req.body);


    // let bf1 = butterfly.findById(req.body.butterfly1, {
    //   attributes : ['id', 'name', 'catchphrase','hp'],
    // });
    // let bf2 = butterfly.findById(req.body.butterfly2, {
    //   attributes : ['id', 'name', 'catchphrase','hp'],
    // });

    return Room
      .create({
        butterfly1: req.body.butterfly1,
        butterfly2: req.body.butterfly2,
        life1: req.body.life1,
        life1: req.body.life2,
      })
      .then(room => res.status(201).send(room))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
  return Room
    .findById(req.params.roomId)
    .then(room => {
      if (!room) {
        return res.status(404).send({
          message: 'Room Not Found',
        });
      }
      return res.status(200).send(room);
    })
    .catch(error => res.status(400).send(error));
  },

  editLife1(req, res) {
  return Room
    .findById(req.params.roomId)
    .then(room => {
      if (!room) {
        return res.status(404).send({
          message: 'Room Not Found',
        });
      }
      let newLife1 = room.life1 + req.body.lifeModifier;
      return room
        .update({
          life1: newLife1,
        })
        .then(() => res.status(200).send(room))  // Send back the updated room.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},

editLife2(req, res) {
return Room
  .findById(req.params.roomId)
  .then(room => {
    if (!room) {
      return res.status(404).send({
        message: 'Room Not Found',
      });
    }
    let newLife2 = room.life2 + req.body.lifeModifier;
    return room
      .update({
        life2: newLife2,
      })
      .then(() => res.status(200).send(room))  // Send back the updated room.
      .catch((error) => res.status(400).send(error));
  })
  .catch((error) => res.status(400).send(error));
},


  newBet(req, res) {
  return Room
    .findById(req.params.roomId)
    .then(room => {
      if (!room) {
        return res.status(404).send({
          message: 'Room Not Found',
        });
      }
      let newcashpool = room.cashpool + req.body.bet;
      return room
        .update({
          cashpool: newcashpool,
        })
        .then(() => res.status(200).send(room))  // Send back the updated room.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},

};
