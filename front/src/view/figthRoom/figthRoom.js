import React, { Component } from 'react';
import BattleLog from './../../components/battleLog/battleLog';
import EnemyInterface from './../../components/enemyInterface/enemyInterface';
import PlayerInterface from './../../components/fightInterface/playerInterface';
import './figthRoom.css';

class FigthRoom extends Component {

  roomProvider = require('./../../providers/room.provider');
  constructor(props) {
    super(props);
    this.roomProvider.default.prototype.getRoom();
    this.state = {
      roomInfos: this.roomProvider.default.prototype.room
    }
    console.log(this.state.roomInfos);
  }

  render() {
    return (
      <div className="figth-room">
        <div className="player-interface-div">
          <PlayerInterface joueurInfos={this.state.roomInfos.player} />
        </div>
        <div className="battle-log-div">
          <BattleLog />
        </div>
        <div className="enemy-interface-div">
          <EnemyInterface enemyInfos={this.state.roomInfos.enemy} />
        </div>
      </div>
    );
  }
}

export default FigthRoom;