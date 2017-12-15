import React, { Component } from 'react';

import AttackButton from './attackButton';
import ButterflyDetails from './butterflyDetails';
import HpDetail from './hpDetail';
import './fightroom.css';

class PlayerInterface extends Component {

  constructor(props) {
    super(props);

    this.state = {
      joueurInfos: props.joueurInfos,
      attacks: [
        ['1', 'Coup de patte'],
        ['2', 'Battement d\'aile'],
        ['3', 'Charge'],
        ['4', 'Katana']
      ],
      properties: {
        'speed': '40',
        'mortality': '5',
        'luck': '55',
      },
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
          
        </div>
      </div>
    );
  }
}

export default PlayerInterface;
