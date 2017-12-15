import React, { Component } from 'react';


class ButterflyDetails extends Component {
  render() {
    return(
    <div>
      <p>
        <strong>Attack : </strong>
        {this.props.attack}
      </p>
      <p>
        <strong>Défense : </strong>
        {this.props.defense}
      </p>
      <p>
        <strong>Rapidité : </strong>
        {this.props.speed}
      </p>
      <p>
        <strong>Mortalité : </strong>
        {this.props.mortality}
      </p>
      <p>
        <strong>Chance : </strong>
        {this.props.luck}
      </p>
    </div>
    )
  }
}

export default ButterflyDetails;
