import React, { Component } from 'react';
import FigthRoom from './../view/figthRoom/figthRoom';
import LoaderComponent from './../containers/loader';
import Login from './../view/authentification/loginPage';
import Spectator from './../view/spectator/spectatorView';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {

  connector = require('./../providers/connector.provider').default.prototype;
  constructor(props) {
    super(props);
    this.connector.setConnection();
    this.state = {
      matchEnded: props.matchEnded,
      won: props.won
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      matchEnded: props.matchEnded,
      won: props.won
    });
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
