import React, { Component } from 'react';
import AttackProvider from './../../providers/attack.provider';

class AttackButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      label: props.attack.label,
      attackId: props.attack.attackId
    }
  }

  handleClick = (event) => {
    AttackProvider.launchAttack(event.target.id);
  }

  render() {
    return (
      <div className="button">
        <button
          id={this.state.attackId}
          onClick={this.handleClick}
        >
          {this.state.label}
        </button>
      </div>
    )
  }

}

export default AttackButton;
