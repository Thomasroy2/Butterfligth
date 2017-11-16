import React, { Component } from 'react';

import SingleDetail from './singleDetail';

class ButterflyDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      properties: props.properties
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      properties: props.properties
    })
  }

  displayHover(key) {
    switch(key) {
      case 'HP':
        return 'Le nombre de dégat que peut encaisser votre papillon';
      case 'name':
        return 'Le nom de votre papillon'
      case 'speed':
        return 'La vitesse d\'attaque de votre papillon';
      case 'mortality':
        return 'Le % de chance que votre papillon a de mourrir chaque tour';
      case 'luck':
        return 'La chance qu\'a votre papillon de réussir ses attaques';
      case 'defense':
        return 'Le coefficient pour calculer les dégats encaissés par votre papillon';
      case 'attack':
        return 'Le coefficient pour calculer les dégats causés par votre papillon';
      default:
        return 'No more infos';
    }
  }

  render() {
    console.log(this.state.properties);
    return(
      <ul>
        {Object.keys(this.state.properties).map((key, data) => {
          return (
            <li title={this.displayHover(key)}>
              <SingleDetail
                label={key}
                value={this.state.properties[key]}/>
            </li>
          )
        })}
      </ul>
    )
  }

}

export default ButterflyDetails;
