import mocks from './../mocks/mocks'
import ConnectorProvider from './connector.provider';


class BattleLogProvider {

  battleLog;

  getAllLog() {
    let connector = require('./../providers/connector.provider');
    connector.default.prototype.sendRequest(
      'battleLog',
      {},
      true,
      'Chargement des logs'
    ).then(
      (data) => {
        console.log(data);
      }
    )
    this.battleLog = mocks.battleLog;
    return this.battleLog;
  }
}

export default BattleLogProvider;