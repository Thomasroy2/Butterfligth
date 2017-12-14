import React, { Component } from 'react';
import FigthRoom from './../view/figthRoom/figthRoom';
import LoaderComponent from './../containers/loader';
import Login from './../view/authentification/loginPage';
import Spectator from './../view/spectator/spectatorView';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


class App extends Component {

  roomProvider = require('./../providers/room.provider');
  connector = require('./../providers/connector.provider');
  constructor(props) {
    super(props);
    this.connector.default.prototype.setConnection();
    this.roomProvider.default.prototype.getRoom();
  }

  componentDidMount() {
    document.title = 'Butterfligth'
  }

  render() {
    return (
      <div className="App">
        <LoaderComponent />
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
