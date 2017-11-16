import mocks from './../mocks/mocks'


class BattleLogProvider {

  battleLog;

  getAllLog() {
    // TODO: Requete de recup des logs de combat de la room en cours
    this.battleLog = mocks.battleLog;
    return this.battleLog;
  }

  sendLog(BattleLog, roomId) {
    // TODO: Requete d'envoi d'une ligne de log
  }
}

export default BattleLogProvider;