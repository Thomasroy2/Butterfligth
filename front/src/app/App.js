import React, { Component } from 'react';
import logo from './../assets/icon/logo.svg';
import BattleLog from './../components/battleLog/battleLog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="battle-log-div">
          <BattleLog />
        </div>
      </div>
    );
  }
}

export default App;
