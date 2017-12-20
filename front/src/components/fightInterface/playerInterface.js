import React, { Component } from 'react';

import AttackButton from './attackButton';
import ButterflyDetails from './butterflyDetails';
import HpDetail from './hpDetail';
import Modal from 'react-modal';
import './fightroom.css';

class PlayerInterface extends Component {

  constructor(props) {
    super(props);

    this.state = {
      joueurInfos: props.fightroom.fightroom.player
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      joueurInfos: props.fightroom.fightroom.player,
    });
  }

  handleClick = (attackId) => {
    this.props.onAttackChoosed(attackId);
  }

  render() {
    let img = require('../../assets/img/' + this.state.joueurInfos.pic);
    const customStyles = {
      content: {
        top: '30%',
        left: '38%',
        right: '38%',
        bottom: 'auto',
        padding: '0',
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.75)',
        border: '4px solid #ef43d6',
      }
    }
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
            attack={this.state.joueurInfos.attack}
            defense={this.state.joueurInfos.defense}
            speed={this.state.joueurInfos.speed}
            mortality={this.state.joueurInfos.mortality}
            luck={this.state.joueurInfos.luck}
          />
          <Modal isOpen={this.props.canAttack} style={customStyles}>

            <div className="player-bouton-div">
              {this.state.joueurInfos.attacks.map(
                (attack) => {
                  return (
                    <AttackButton attack={attack}>
                    </AttackButton>
                  );
                })}
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default PlayerInterface;
