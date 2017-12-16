import React, { Component } from 'react';
import BattleLog from './../../components/battleLog/battleLog';
import EnemyInterface from './../../components/enemyInterface/enemyInterface';
import PlayerInterface from './../../containers/playerInterface';
import './figthRoom.css';

class FigthRoom extends Component {

  roomProvider = require('./../../providers/room.provider');
  constructor(props) {
    super(props);
    this.state = {
      roomInfos: [],
      isLoaded: false,
      paramId: (props.match.params.id == 1)
    }
    console.log(this.state.paramId);
    this.roomProvider.default.prototype.getRoom(this.state.paramId).then(
      (roomInfos) => {
        console.log(roomInfos)
        this.setState({
          roomInfos: roomInfos,
          isLoaded: true
        })
        console.log(this.state.roomInfos);
      }
    ).catch(
      (error) => {
        console.log(error)
        throw 'Create room error';
      }
      );
  }

  render() {
    if (this.state.isLoaded) {
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
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default FigthRoom;