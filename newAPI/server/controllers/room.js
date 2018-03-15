const butterfly = require('../models').butterfly;
const skill = require('../models').skill;
const Room = require('../models').room;
const fighter = require('../models').fighter;

const fighterController = require('./fighter');
const roomController = require('./room');

function changeRoomIntoBetRoom(room)
{
  let intermediateRoom={
    "id":room.id,
    "name":room.name,
    "fighter1":room.butterfly1,
    "fighter2":room.butterfly2,
    "attackerTurnId":room.attackerTurnId,
    "winner":room.winner,
    "cashpoolfighter1":room.cashpoolfighter1,
    "cashpoolfighter2":room.cashpoolfighter2
  }
  return intermediateRoom;
}

module.exports = {
  createIo(butterfly) {
    return Room
      .create({
        name: 'YOLOOOOOOOOOOO',
        butterfly1: butterfly.id,
        attackerTurnId: butterfly.id,
        winner: 0,
        cashpoolfighter1: 0,
        cashpoolfighter2:0
      })
      .then(room => {
        return room;
      })
      .catch(error => {
        return error;
      });
  },
  create(req, res, butterfly) {

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
            console.log('1', data);
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
                        data.winner = null

                        if (fighter.hp <= 0) {
                          data.winner = req.body.attackerId
                        }
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

  attackIo(attackinfo) {
    return Room
      .findById(attackinfo.roomId)
      .then(room => {
        if (!room) {
          return {
            message: 'Room not found',
          };
        }

        if (room.winner !== 0) {
          return {
            message: 'Fight already finished',
          };
        }

        if (attackinfo.attackerId != room.butterfly1 && attackinfo.attackerId != room.butterfly2) {
          return {
            message: 'Invalid attacker',
          };
        }

        if (attackinfo.targetId != room.butterfly1 && attackinfo.targetId != room.butterfly2) {
          return {
            message: 'Invalid target',
          };
        }
        return skill
          .findById(attackinfo.skillId, {
            attributes: ['id', 'name', 'base_attack', 'effect'],
          })
          .then(skill => {
            return fighter
              .findById(attackinfo.targetId)
              .then(fighter => {
                let newlife = fighter.hp - skill.base_attack
                return fighter
                  .update({
                    hp: (newlife <= 0) ? 0 : newlife,
                  })
                  .then(fighter => {
                    return module.exports.retrieveIo(attackinfo.roomId)
                      .then(room => {

                        let data = room
                        let battleLog = {
                          attackerId: attackinfo.attackerId,
                          dmg: skill.base_attack,
                          effect: skill.effect
                        }

                        data.battleLog = battleLog

                        if (fighter.hp <= 0) {
                          data.winner = attackinfo.attackerId
                        }
                        return data
                      })
                  })
              })
          })
      })
      .then(data => {
        return data;
      });
  },
  retrieveBetRoom(){
    return Room
      .findAll({
        limit:1,
        where:{

        },
        order:[['createdAt','DESC']]
      })
      .then(roomfound=>{
        if(!roomfound)
        {
          return null;
        }
        let data=changeRoomIntoBetRoom(roomfound);
        return fighter
                .findById(data.fighter1)
                .then(fighter1=>{
                  data.fighter1=fighter1;
                  return fighter
                          .findById(data.fighter2)
                          .then(fighter2=>{
                            data.fighter2=fighter2;
                            return data;
                          })
                })
      })
      .then(data=>{
        return data;
      })

  },
};
