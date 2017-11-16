import React, { Component } from 'react';
import RoomProvider from './../../providers/room.provider';
import BattleLog from './../../components/battleLog/battleLog';
import EnemyInterface from './../../components/enemyInterface/enemyInterface';
// import PlayerInterface from './../../components/playerInterface/playerInterface';
import './figthRoom.css';

class FigthRoom extends Component {

  roomProvider = new RoomProvider();
  constructor(props) {
    super(props);
    this.state = {
      roomInfos: this.roomProvider.getRoom()
    }
  }

  render() {
    return (
      <div className="figth-room">
        <div className="player-interface-div">
          {/* <PlayerInterface playerInfos={this.state.roomInfos.player} /> */}
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