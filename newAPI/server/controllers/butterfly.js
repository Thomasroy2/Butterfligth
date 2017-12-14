const butterfly = require('../models').butterfly;
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
        attributes: ['id', 'name', 'catchphrase'],
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
  generateIo() {
    return butterfly.findById(getRandomInt(1, 12), {
        attributes: ['id', 'name', 'catchphrase', 'hp', 'mortality', 'attack'],
      })
      .then(butterfly => {
        let data = butterfly.toJSON()

        data.skills = [];

        return skill.findById(getRandomInt(1, 15), {
          attributes: ['id', 'name', 'effect'],
        })
          .then(skill => {
            data.skills.push(skill.dataValues);
            return data;
          });

        // for(var i = 0; i < 3;i++)
        // {
        //     data.skills[i] = skill.findById(getRandomInt(1,15), {
        //       attributes : ['id', 'name', 'effect'],
        //     }).toJSON();
        // }
      })
      .then(data => {
        return data;
      });
  },
  generate(req, res) {
    butterflyData = butterfly
      .findById(getRandomInt(1, 12), {
        attributes: ['id', 'name', 'catchphrase', 'hp', 'mortality', 'attack'],
      })
      .then(butterfly => {
        if (!butterfly) {
          return res.status(404).send({
            message: 'Butterfly Not Found',
          });
        }
        const data = butterfly.toJSON()

        data.skills = [];

        data.skills[0] = skill.findById(getRandomInt(1, 15), {
          attributes: ['id', 'name', 'effect'],
        })
          .then(data => console.log(data));

        // for(var i = 0; i < 3;i++)
        // {
        //     data.skills[i] = skill.findById(getRandomInt(1,15), {
        //       attributes : ['id', 'name', 'effect'],
        //     }).toJSON();
        // }
        return data;
      })
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  },

};
