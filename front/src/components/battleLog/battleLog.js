import React, { Component } from 'react';
import './battleLog.css';

class BattleLog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      battleLogs: props.fightroom.fightroom.battleLog,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      battleLogs: props.fightroom.fightroom.battleLog,
    });
  }

  componentDidUpdate() {
    let element = document.getElementById('logs-div');
    element.scrollTop = element.scrollHeight;
  }

  render() {
    return (
      <div className="battle-log-component">
        <h2>
          Logs de combat
        </h2>
        <div className="logs-div" id="logs-div">
        {this.state.battleLogs.map(
          (battleLog, index) => {
            const source = (battleLog.attackerId === this.props.fightroom.fightroom.player.id) ? 'Joueur 1' : 'Joueur 2';
            return (
              <p className="log-row" key={index}>
                <b>{source}</b>&nbsp;attaque et inflige&nbsp;<b>{battleLog.dmg} points de dégats</b>
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
