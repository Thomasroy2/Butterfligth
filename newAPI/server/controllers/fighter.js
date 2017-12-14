const butterfly = require('../models').butterfly;
const fighter = require('../models').fighter;
const skill = require('../models').skill;

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
}

function selectSkill(req, res)
{
  return skill
    .findById(getRandomInt(1, 15), {
      attributes : ['id', 'name', 'effect'],
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

retrieve2(req, res) {
  return fighter
    .findById(req.params.fighterId, {
      attributes : ['id', 'butterflyId', 'hp'],
    })
    .then(fighter => {
      if (!fighter) {
        return res.status(404).send({
          message: 'fighter Not Found',
        });
      }
      return res.status(200).send(fighter);
    })
    .catch(error => res.status(400).send(error));
},

};
