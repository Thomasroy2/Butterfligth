import React, { Component } from 'react';
import './battleLog.css';
import BattleLogProvider from './../../providers/battleLog.provider'

class BattleLog extends Component {

  battleLogProvider = new BattleLogProvider();
  constructor(props) {
    super(props);
    this.state = {
      battleLogs: this.battleLogProvider.getAllLog(),
    }
  }

  render() {
    return (
      <div className="battle-log-component">
        <h2>
          Logs de combat
        </h2>
        <div>
        {this.state.battleLogs.map(
          (battleLog) => {
            return (
              <p className="log-row" key={battleLog.id}>
                <b>{battleLog.source}</b>&nbsp;{battleLog.message}&nbsp;<b>{battleLog.effect}</b>
              </p>
            )
          }
        )}
        </div>
      </div>
    );
  }
}

export default BattleLog;