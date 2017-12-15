const butterfly = require('../models').butterfly;
const skill = require('../models').skill;
const Room = require('../models').room;
const fighter = require('../models').fighter;

const fighterController = require('./fighter');
const roomController = require('./room');



module.exports = {
  createIo(butterfly) {
    return Room
    .create({
      name:'YOLOOOOOOOOOOO',
      butterfly1: butterfly.id,
      life1: butterfly.hp,
      cashpool: 0
    })
    .then(room => {
      return room;
    })
    .catch(error => {
      return error;
    });
  },
  create(req, res, butterfly) {



    // let bf1 = butterfly.findById(req.body.butterfly1, {
    //   attributes : ['id', 'name', 'catchphrase','hp'],
    // });
    // let bf2 = butterfly.findById(req.body.butterfly2, {
    //   attributes : ['id', 'name', 'catchphrase','hp'],
    // });

    return Room
      .create({
        butterfly1: butterfly,
        life1: butterfly.hp,
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
        let data = room.toJSON()

        return fighterController.retrieveIo(data.butterfly1)
          .then(fighter1 => {
            data.butterfly1 = fighter1;
            return fighterController.retrieveIo(data.butterfly2)
              .then(fighter2 => {
                data.butterfly2 = fighter2;
                return data;
              })
          })
      })
      .then(data => {
        return res.status(200).send(data);
      });
  },

  retrieveIo(roomId) {
    return Room
      .findById(roomId)
      .then(room => {
        if (!room) {
          return res.status(404).send({
            message: 'Room Not Found',
          });
        }
        let data = room.toJSON()

        return fighterController.retrieveIo(data.butterfly1)
          .then(fighter1 => {
            data.butterfly1 = fighter1;
            return fighterController.retrieveIo(data.butterfly2)
              .then(fighter2 => {
                data.butterfly2 = fighter2;
                return data;
              })
          })
      })
      .then(data => {
        return data;
      });
  },


  attack(req, res) {
    return Room
      .findById(req.body.roomId)
      .then(room => {
        if (!room) {
          return res.status(404).send({
            message: 'Room Not Found',
          });
        }
        if (req.body.attackerId != room.butterfly1 && req.body.attackerId != room.butterfly2) {
          return res.status(404).send({
            message: 'Invalid attacker',
          });
        }

        if (req.body.targetId != room.butterfly1 && req.body.targetId != room.butterfly2) {
          return res.status(404).send({
            message: 'Invalid target',
          });
        }
        return skill
            .findById(req.body.skillId, {
                attributes: ['id', 'name', 'base_attack', 'effect'],
          })
          .then(skill => {
              return fighter
                .findById(req.body.targetId)
                .then(fighter => {
                  let newlife = fighter.hp - skill.base_attack
                  return fighter
                  .update({
                    hp: newlife || fighter.hp,
                })
                .then(fighter => {
                    return module.exports.retrieveIo(req.body.roomId)
                    .then(room => {

                      let data = room
                      let battleLog = {
                        attackerId: req.body.attackerId,
                        dmg: skill.base_attack,
                        effect: skill.effect
                      }

                      data.battleLog = battleLog
                      return data
                    })
                })
          })
        })
      })
      .then(data => {
        return res.status(200).send(data);
      });
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
