import React, { Component } from 'react';
import './betInterface.css';

class BetInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            betfighter1:props.betroom.betroom.cashpoolfighter1,
            betfighter2:props.betroom.betroom.cashpoolfighter2,
            idfighter1:props.betroom.betroom.fighter1.id,
            idfighter2:props.betroom.betroom.fighter2.id
        }
      }
    
    componentWillReceiveProps(props) {
        this.setState({
            betfighter1:props.betroom.betroom.cashpoolfighter1,
            betfighter2:props.betroom.betroom.cashpoolfighter2,
            idfighter1:props.betroom.betroom.fighter1.id,
            idfighter2:props.betroom.betroom.fighter2.id
        });
      }
    render() {
        return (
            <div className="betzone">
                <h2>Zone pour les paris</h2>
                <h3>Joueur 1 :</h3>
                <p>{this.state.betfighter1}</p>
                <h3>Joueur 2:</h3>
                <p>{this.state.betfighter2}</p>
            </div>
        )
    }
}

export default BetInterface;