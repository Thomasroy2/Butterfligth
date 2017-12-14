import React, { Component } from 'react';
import FigthRoom from './../view/figthRoom/figthRoom';
import Login from './../view/authentification/loginPage';
import Spectator from './../view/spectator/spectatorView';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const URL_CHOOSE_ATTACK = 'localhost:3001/butterfly/attack/choose/';

class App extends Component {

  /**
    * Notify API that an attack has been choosed
    */
  handleAttackChoosed(attackId) {
    fetch(URL_CHOOSE_ATTACK + attackId)
      .then(res => res.json())
      .then(data => {
        if (data === 'success') {
          this.handleSuccess();
        } else
          this.handleFailure();
      })
      .catch(e => console.error(e))
  }



  render() {

    let attack1 = {
      'name': 'Coup de patte',
      'base_damage': 80,
      'priority': 80,
    };
    let attack2 = {
      'name': 'Battement d\'aile',
      'base_damage': 40,
      'priority': 40,
    };
    let butterfly = {
      'hp': 100,
      'name': 'Papillon de nuit',
      'attacks': [attack1, attack2],
    }
    console.log('Butterfly', butterfly);

    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/fightroom' exact component={FigthRoom} />
            <Route path='/' exact component={Login} />
            <Route path='/spectator' exact component={Spectator} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
