import React, { Component } from 'react';
import HpDetail from './../fightInterface/hpDetail';
class BetFightZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fighter1: props.betroom.betroom.fighter1,
          fighter2: props.betroom.betroom.fighter2,
        }
      }
    
    componentWillReceiveProps(props) {
        this.setState({
            fighter1: props.betroom.betroom.fighter1,
            fighter2: props.betroom.betroom.fighter2,
        });
      }
    render(){
        let imgFighter1 = require('./../../assets/img/image2.png');
        let imgFighter2= require('./../../assets/img/image4.png');
        return (
        <div className="bet-fight-zone">
            <div className="fighters">
                <div className="fighter-image-div">
                    <img className="taille" src={imgFighter1} alt="logo"/>
                </div>
                <div className="fighter1-info-component">
                    <h2>Joueur 1</h2>
                    <p>
                        <strong>Nom :</strong>
                        {this.state.fighter1.name}
                    </p>
                    <p>
                        <HpDetail
                            maxHp={this.state.fighter1.maxHp}
                            currentHp={this.state.fighter1.hp}
                        />
                    </p>
                </div>
            </div>
            <div className="fighters">
                <div className="fighter-image-div">
                    <img className="taille" src={imgFighter2} alt="logo"/>
                </div>
                <div className="fighter1-info-component">
                    <h2>Joueur 2</h2>
                    <p>
                        <strong>Nom :</strong>
                        {this.state.fighter2.name}
                    </p>
                    <p>
                        <HpDetail
                            maxHp={this.state.fighter2.maxHp}
                            currentHp={this.state.fighter2.hp}
                        />
                    </p>
                </div>
            </div>
        
        </div>
        );
    }
}