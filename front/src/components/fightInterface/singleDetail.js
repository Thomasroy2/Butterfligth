import React from 'react';

class SingleDetail extends React.Component {

  render() {
    let label = this.props.label.charAt(0).toUpperCase() + this.props.label.slice(1);
    let value = this.props.value;

    return(
      <span>
        {label} : {value}
      </span>
    )
  }

}

export default SingleDetail;
