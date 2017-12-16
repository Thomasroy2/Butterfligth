import React, { Component } from 'react';

import AttackButton from './attackButton';
import ButterflyDetails from './butterflyDetails';
import HpDetail from './hpDetail';
import Modal from 'react-modal';
import './fightroom.css';

class PlayerInterface extends Component {

  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      joueurInfos: props.joueurInfos,
      sendState: 'pending'
    }
  }

  handleClick = (attackId) => {
    this.props.onAttackChoosed(attackId);
  }

  render() {
    let img = require('./../../assets/img/' + this.state.joueurInfos.pic);
    console.log(img);
    return (
      <div className="player-interface">
        <div className="player-image-div">
          <p>
            <img className="taille" src={img} alt="logo" />
          </p>
        </div>
        <div className="player-information-div">
          <h2>
            Joueur 1
          </h2>
          <p>
            <strong>Nom  : </strong>
            {this.state.joueurInfos.name}
          </p>
          <HpDetail
            maxHp={this.state.joueurInfos.maxHp}
            currentHp={this.state.joueurInfos.hp}
          />
          <ButterflyDetails
            attack= {this.state.joueurInfos.attack}
            defense= {this.state.joueurInfos.defense}
            speed={this.state.joueurInfos.speed}
            mortality={this.state.joueurInfos.mortality}
            luck={this.state.joueurInfos.luck}
          />
          <Modal isOpen={this.props.canAttack}>
            {this.state.joueurInfos.attacks.map(
              (attack) => {
              return (
                <AttackButton attack={attack}>
                </AttackButton>
              );
            })}
          </Modal>
        </div>
      </div>
    );
  }
}

export default PlayerInterface;
