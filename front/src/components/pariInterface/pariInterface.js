import React, { Component } from 'react';
import './pariInterface.css';

class PariInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bet:props.betroom.betroom.bet,
        }
      }
    
    componentWillReceiveProps(props) {
        this.setState({
            bet:props.betroom.betroom.bet,
        });
      }
    render() {
        return (
            <div className="zone-paris">
                <h2>Zone pour les paris</h2>
            
            </div>
        )
    }
}

export default PariInterface;