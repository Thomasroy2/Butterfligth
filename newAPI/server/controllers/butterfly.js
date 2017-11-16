const butterfly = require('../models').butterfly;
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

  create(req, res) {
    return butterfly
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(butterfly))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
  return butterfly
    .findById(req.params.bfId, {
      attributes : ['id', 'name', 'catchphrase'],
    })
    .then(butterfly => {
      if (!butterfly) {
        return res.status(404).send({
          message: 'Butterfly Not Found',
        });
      }
      return res.status(200).send(butterfly);
    })
    .catch(error => res.status(400).send(error));
},

generate(req, res) {
return butterfly

  .findById(getRandomInt(1,12), {
    attributes : ['id', 'name', 'catchphrase'],
  })
  .then(butterfly => {
    if (!butterfly) {
      return res.status(404).send({
        message: 'Butterfly Not Found',
      });
    }

    const data = butterfly.toJSON()

    data.skills = [];

    for(var i = 0; i < 3;i++)
    {
        data.skills[i] = selectSkill();
    }

    return res.status(200).send({Butterfly: data});
  })
  .catch(error => res.status(400).send(error));
},

};
