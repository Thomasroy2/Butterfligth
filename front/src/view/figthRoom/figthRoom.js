import React, { Component } from 'react';
import BattleLog from './../../containers/battleLog';
import EnemyInterface from './../../containers/enemyInterface';
import PlayerInterface from './../../containers/playerInterface';
import './figthRoom.css';

class FigthRoom extends Component {

  roomProvider = require('./../../providers/room.provider').default.prototype;
  constructor(props) {
    super(props);
    this.state = {
      roomInfos: [],
      isLoaded: false,
      paramId: (props.match.params.id == 1)
    }
    this.roomProvider.getRoom(this.state.paramId).then(
      (roomInfos) => {
        this.setState({
          roomInfos: roomInfos,
          isLoaded: true
        })
      }
    ).catch(
      (error) => {
        console.error(error)
        throw 'Create room error';
      }
      );
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="figth-room">
          <div className="player-interface-div">
            <PlayerInterface />
          </div>
          <div className="battle-log-div">
            <BattleLog />
          </div>
          <div className="enemy-interface-div">
            <EnemyInterface />
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