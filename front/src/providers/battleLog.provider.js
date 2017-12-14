import mocks from './../mocks/mocks'
import ConnectorProvider from './connector.provider';


class BattleLogProvider {

  battleLog;

  getAllLog() {
    let connector = require('./../providers/connector.provider');
    connector.default.prototype.sendRequest(
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