import React, { Component } from 'react';
import HpDetail from './../fightInterface/hpDetail';
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
          Joueur 2
        </h2>
        <p>
          <strong>Nom </strong> :
          {this.state.enemyInfos.name}
        </p>
        <p>
          <strong> Image  :</strong>
          <img src={this.state.enemyInfos.pic}/>
        </p>
        <p>
          <HpDetail
            maxHp={this.state.enemyInfos.maxHp}
            currentHp={this.state.enemyInfos.hp}
          />
        </p>
      </div>
    );
  }
}

export default EnemyInterface;