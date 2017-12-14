import React, { Component } from 'react';

import AttackButton from './attackButton';
import ButterflyDetails from './butterflyDetails';
import HpDetail from './hpDetail';

class PlayerInterface extends Component {

  constructor(props) {
    super(props);

    this.state = {
      joueurInfos: props.joueurInfos, 
      attacks:    [
        ['1', 'Coup de patte'],
        ['2', 'Battement d\'aile'],
        ['3', 'Charge'],
        ['4', 'Katana']
      ],
      properties: {
        'speed' : '40',
        'mortality' : '5',
        'luck': '55',
      },
      sendState: 'pending'
    }
  }

  handleClick = (attackId) => {
    this.props.onAttackChoosed(attackId);
  }
  
  render() {
    let img = require('./../../assets/img/' + this.state.joueurInfos.pic)
    return (
        <div>
          <h2>
              Joueur 1 
          </h2>
          <p>
            <strong>Nom  : </strong>
            {this.state.joueurInfos.name}
          </p>
          <p>
            <strong>image :  </strong> <br />
            <img className="taille" src={img} alt="logo" />
          </p>
          <div>
            <HpDetail
              maxHp={this.state.joueurInfos.maxHp}
              currentHp={this.state.joueurInfos.hp}
            />
            <ButterflyDetails 
              speed={this.state.joueurInfos.speed}
              mortality={this.state.joueurInfos.mortality}
              luck={this.state.joueurInfos.luck}
            />
          </div>
          <div>
            {this.state.attacks.map((key) => 
            {
            let buttonEnabled = 'enabled';
            if(this.state.sendState === 'success') 
            {
              buttonEnabled = 'disabled';
            } else {
              buttonEnabled = 'enabled';
            }
            return (
                  <AttackButton
                    label={key[1]}
                    attackId={key[0]}
                    key={key[0]}
                    onClick={this.handleClick}
                    enabled={buttonEnabled}
                  />
                )
            })}
        </div>
        </div>
    );
  }

}

export default PlayerInterface;
