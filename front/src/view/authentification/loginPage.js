import React from 'react';
import { withRouter } from 'react-router';
import './loginPage.css';
import {
  Redirect
} from 'react-router-dom'
import mocks from './../../mocks/mocks'

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirection: false,
      identifiant: "",
      mdp: "",
      identifiantInfo: mocks.login.num1
    }
  }
  handleChangeIdentifiant = (event) => {
    this.setState({
      identifiant: event.target.value
    });
  }
  handleChangeMdp = (event) => {
    this.setState({
      mdp: event.target.value
    });
  }
  handleClick = () => {
    this.setState({
      redirection: true
    });
  }
  render() {
    if ((this.state.redirection) || ((this.state.identifiantInfo.identifiant === this.state.identifiant) && (this.state.identifiantInfo.mdp === this.state.mdp))) {
      return (
        <Redirect to='/fightroom' />
      )
    }
    else {
      return (
        <div className="authentif">
          <Redirect to='/fightroom/1' />
          <label>
            Identifiant:
            <input
              type="text"
              value={this.state.identifiant}
              onChange={this.handleChangeIdentifiant}
            />
          </label><br /><br />
          <label>
            Mot de passe:
            <input
              type="password"
              value={this.state.mdp}
              onChange={this.handleChangeMdp}
            />
          </label><br /><br />
          {/* <button
            onClick={this.handleClick}
          >
            S'authentifier
          </button> */}
        </div>
      );
    }
  }
}

export default withRouter(LoginPage);