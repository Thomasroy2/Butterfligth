import React, { Component } from 'react';
import './enemyInterface.css';

class EnemyInterface extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enemyInfos: props.enemyInfos,
    }
  }

  render() {
    return (
      <div className="enemy-infos-component">
        <h2>
          {this.state.enemyInfos.name}
        </h2>
      </div>
    );
  }
}

export default EnemyInterface;