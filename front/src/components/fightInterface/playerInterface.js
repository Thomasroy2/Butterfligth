import React, { Component } from 'react';

import AttackButton from './attackButton';
import ButterflyDetails from './butterflyDetails';
import HpDetail from './hpDetail';

const SEND_STATE = ['FAIL' : 'fail', 'SUCCESS' : 'success', 'PENDING' : 'pending']

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

  handleFailure() {
    this.setState({
      sendState: SEND_STATE['FAIL'],
    });
  }

  handleSuccess() {
    this.setState({
      sendState: SEND_STATE['SUCCESS'],
    })
  }

  handlePending() {
    this.setState({
      sendState: SEND_STATE['PENDING'],
    })
  }

  handleIntroText() {
    switch(this.state.sendState) {
      case SEND_STATE['SUCCESS']:
        return "En attente du jeu";
      case SEND_STATE['FAIL']:
        return "Erreur lors de l'attaque. Veuillez réessayer";
      case SEND_STATE['PENDING']:
        return "C'est votre tour";
    }
  }

  render() {
    let introText = this.handleIntroText();

    return (
        <div>
          <h2>
              Joueur 1 
          </h2>
          <div>
            {introText}
          </div>
          <p>
            <strong>Nom  : </strong>
            {this.state.joueurInfos.name}
          </p>
          <p>
            <strong>image :  </strong>  
            {this.state.joueurInfos.pic}
            <img src={this.state.joueurInfos.pic}/>
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
          {this.state.attacks.map((key) => {

            let buttonEnabled = 'enabled';
            if(this.state.sendState === 'success') {
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
