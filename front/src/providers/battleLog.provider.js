import mocks from './../mocks/mocks'
import ConnectorProvider from './connector.provider';


class BattleLogProvider {

  battleLog;

  getAllLog() {
    ConnectorProvider.sendRequest(
      'battleLog',
      'GET',
      {},
      false,
      ''
    ).then(
      (data) => {
        console.log(data);
      }
    )
    this.battleLog = mocks.battleLog;
    return this.battleLog;
  }

  sendLog(BattleLog, roomId) {
    // TODO: Requete d'envoi d'une ligne de log
  }
}

export default BattleLogProvider;