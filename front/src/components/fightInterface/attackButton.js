import React, { Component } from 'react';

class AttackButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      label:  props.label,
      attackId:    props.attackId
    }
  }

  handleClick = (event) => {
    this.props.onClick(event.target.id);
  }

  componentDidMount(props) {

  }

  render() {
    return (
      <div className="button">
        <button
          id={this.state.attackId}
          onClick={this.handleClick}
          enabled={this.props.enabled}
        >
          {this.state.label}
        </button>
      </div>
    )
  }

}

export default AttackButton;
