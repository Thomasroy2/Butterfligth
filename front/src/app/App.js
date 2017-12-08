import React, { Component } from 'react';
import FigthRoom from './../view/figthRoom/figthRoom';
import LoaderComponent from './../containers/loader';
import './App.css';

const URL_CHOOSE_ATTACK = 'localhost:3001/butterfly/attack/choose/';

class App extends Component {

  roomProvider = require('./../providers/room.provider');
  connector = require('./../providers/connector.provider');
  constructor(props) {
    super(props);
    this.connector.default.prototype.setConnection();
    console.log(this.roomProvider.default.prototype.getRoom());
  }


  /**
    * Notify API that an attack has been choosed
    */
  handleAttackChoosed(attackId) {
        fetch(URL_CHOOSE_ATTACK + attackId)
          .then(res => res.json())
          .then(data => {
            if(data === 'success') {
              this.handleSuccess();
            } else
              this.handleFailure();
          })
          .catch(e => console.error(e))
  }



  render() {

    let attack1 = {
      'name' : 'Coup de patte',
      'base_damage' : 80,
      'priority': 80,
    };
    let attack2 = {
      'name' : 'Battement d\'aile',
      'base_damage' : 40,
      'priority': 40,
    };
    let butterfly = {
      'hp' : 100,
      'name': 'Papillon de nuit',
      'attacks' : [attack1, attack2],
    }

    return (
      <div className="App">
        <LoaderComponent />
        <div className="figth-view-div">
          <FigthRoom />
        </div>
      </div>
    );
  }
}

export default App;
