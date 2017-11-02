import mocks from './../mocks/mocks'


class BattleLogProvider {

  static getAllLog() {
    // TODO: Requete de recup des logs de combat de la room en cours
    return mocks.battleLog;
  }

  static sendLog(BattleLog, roomId) {
    // TODO: Requete d'envoi d'une ligne de log
  }
}

export default BattleLogProvider;