import mocks from './../mocks/mocks'
import ConnectorProvider from './connector.provider';


class BattleLogProvider {

  battleLog;

  getAllLog() {
    let connector = require('./../providers/connector.provider').default.prototype;
    connector.sendRequest(
      'battleLog',
      {},
      false,
      'Chargement des logs'
    ).then(
      (data) => {

      }
    )
    this.battleLog = mocks.battleLog;
    return this.battleLog;
  }
}

export default BattleLogProvider;