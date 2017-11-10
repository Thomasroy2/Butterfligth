import React from 'react';

class HpDetail extends React.Component {

  render() {

    let maxHp     = this.props.maxHp;
    let currentHp = this.props.currentHp;

    return(
      <li>
        Point de vie : {currentHp} / <b>{maxHp}</b>
      </li>
    )
  }

}

export default HpDetail;
