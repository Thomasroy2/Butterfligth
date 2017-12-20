module.exports = {

  create(req, res) {
    return battleLog
      .create({
        attackerId: req.body.attackerId,
        targetId: req.body.targetId,
        skillId: req.body.skillId,
      })
      .then(todo => res.status(201).send(butterfly))
      .catch(error => res.status(400).send(error));
  },

  createIo(attackerId, targetId, skillId) {
    return battleLog
      .create({
        attackerId: attackerId,
        attackerId: attackerId,
        skillId: skillId,
      })
      .then(battleLog => {
        return battleLog;
      })
      .catch(error => res.status(400).send(error));
  },

  retrieveIo(roomId) {
    return battleLogs
      .findAll({ where: { roomId: roomId } })
      .then(battleLogs => {
        return battleLogs;
      });
  },

}
