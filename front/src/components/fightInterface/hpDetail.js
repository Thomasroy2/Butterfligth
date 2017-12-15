import React from 'react';

class HpDetail extends React.Component {

  render() {
    return(
      <div>
        <p>
          <strong>Point de vie : </strong>
          {this.props.currentHp} / <b>{this.props.maxHp}</b><br/>
          <center>
            <div className="barreVie">
                <div 
                    className="barreVie2"
                    style= {{width: this.getHpPercent()}}
                    >
                </div>
            </div>
          </center>
        </p>
      </div>
    )
  }

  getHpPercent() {
    return (((this.props.currentHp / this.props.maxHp)*100) * 2)
  }
}

export default HpDetail;
