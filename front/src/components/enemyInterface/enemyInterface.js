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
    let img = require('./../../assets/img/' + this.state.enemyInfos.pic)
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
          <strong> Image  :</strong><br />
          <img className="taille" src={img} alt="logo" />
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