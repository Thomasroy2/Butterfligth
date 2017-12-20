const butterfly = require('../models').butterfly;
const fighter = require('../models').fighter;
const skill = require('../models').skill;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function selectSkill(req, res) {
  return skill
    .findById(getRandomInt(1, 15), {
      attributes: ['id', 'name', 'effect'],
    })
    .then(skill => {
      if (!skill) {
        return res.status(404).send({
          message: 'Skill Not Found',
        });
      }
      return res.status(200).send(skill);
    })
    .catch(error => res.status(400).send(error));
}

module.exports = {

  generateIo() {

    return fighter
      .create({
        butterflyId: getRandomInt(1, 12),
        skill1: getRandomInt(1, 15),
        skill2: getRandomInt(1, 15),
        skill3: getRandomInt(1, 15),
        skill4: getRandomInt(1, 15)
      })
      .then(fighter => {

        if (!fighter) {
          return res.status(404).send({
            message: 'Error while creating',
          });
        }
        let data = fighter.toJSON()
        return butterfly.findById(data.butterflyId, {
          attributes: ['id', 'name', 'catchphrase', 'hp', 'mortality', 'attack'],
        })
          .then(butterfly => {
            data.butterfly = butterfly.dataValues

            return fighter
              .update({
                hp: data.butterfly.hp || fighter.hp,
              })
              .then(fighter => {
                return skill.findById(data.skill1, {
                  attributes: ['id', 'name', 'effect'],
                })
                  .then(skill1 => {
                    data.skill1 = skill1.dataValues

                    return skill.findById(data.skill2, {
                      attributes: ['id', 'name', 'effect'],
                    })
                      .then(skill2 => {
                        data.skill2 = skill2.dataValues

                        return skill.findById(data.skill3, {
                          attributes: ['id', 'name', 'effect'],
                        })
                          .then(skill3 => {
                            data.skill3 = skill3.dataValues

                            return skill.findById(data.skill4, {
                              attributes: ['id', 'name', 'effect'],
                            })
                              .then(skill4 => {
                                data.skill4 = skill4.dataValues
                                return data;
                              })
                          })
                      })
                  })
              })
          })
      })
      .then(data => {
        return data;
      });
  },

  retrieveIo(fighterId) {

    return fighter
      .findById(fighterId)
      .then(fighter => {

        if (!fighter) {
          return null;
        }
        let data = fighter.toJSON()
        return butterfly.findById(data.butterflyId, {
          attributes: ['id', 'name', 'catchphrase', 'hp', 'attack', 'defense', 'luck', 'speed', 'mortality'],
        })
          .then(butterfly => {
            data.butterfly = butterfly.dataValues

            return skill.findById(data.skill1, {
              attributes: ['id', 'name', 'effect'],
            })
              .then(skill1 => {
                data.skill1 = skill1.dataValues

                return skill.findById(data.skill2, {
                  attributes: ['id', 'name', 'effect'],
                })
                  .then(skill2 => {
                    data.skill2 = skill2.dataValues

                    return skill.findById(data.skill3, {
                      attributes: ['id', 'name', 'effect'],
                    })
                      .then(skill3 => {
                        data.skill3 = skill3.dataValues

                        return skill.findById(data.skill4, {
                          attributes: ['id', 'name', 'effect'],
                        })
                          .then(skill4 => {
                            data.skill4 = skill4.dataValues
                            return data;
                          })
                      })
                  })
              })
          })
      })
      .then(data => {
        return data;
      });
  },

  generate(req, res) {

    return fighter
      .create({
        butterflyId: getRandomInt(1, 12),
        skill1: getRandomInt(1, 15),
        skill2: getRandomInt(1, 15)
      })
      .then(fighter => {

        if (!fighter) {
          return res.status(404).send({
            message: 'Error while creating',
          });
        }
        let data = fighter.toJSON()
        return butterfly.findById(data.butterflyId, {
          attributes: ['id', 'name', 'catchphrase', 'hp', 'mortality', 'attack'],
        })
          .then(butterfly => {
            data.butterfly = butterfly.dataValues

            return fighter
              .update({
                hp: data.butterfly.hp || fighter.hp,
              })
              .then(fighter => {
                return skill.findById(data.skill1, {
                  attributes: ['id', 'name', 'effect'],
                })
                  .then(skill1 => {
                    data.skill1 = skill1.dataValues

                    return skill.findById(data.skill2, {
                      attributes: ['id', 'name', 'effect'],
                    })
                      .then(skill => {
                        data.skill2 = skill.dataValues
                        return data;
                      })
                  })
              })
          })
      })
      .then(data => {
        return res.status(200).send(data);
      });
  },

};
