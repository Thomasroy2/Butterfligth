import React, { Component } from 'react';
import './chatInterface.css';

class ChatInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fighter1: props.betroom.betroom.fighter1,
          fighter2: props.betroom.betroom.fighter2,
        }
      }
    
      componentWillReceiveProps(props) {
        this.setState({
            fighter1: props.betroom.betroom.fighter1,
            fighter2: props.betroom.betroom.fighter2,
        });
      }
    render() {
        return (
            <div class="zone-chat">
                <h2>Zone de chat</h2>
                <textarea>
                </textarea>
            </div>
        )
    }
}

export default ChatInterface;