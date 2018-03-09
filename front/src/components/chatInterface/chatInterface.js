import React, { Component } from 'react';
import './chatInterface.css';

class ChatInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
          chat: props.betroom.betroom.chat
        }
      }
    
      componentWillReceiveProps(props) {
        this.setState({
            chat: props.betroom.betroom.chat
        });
      }
    render() {
        const mapedChat=this.state.chat.map((message)=>
            <p><strong>{message.author}</strong> : {message.message}</p>
            
    );
        return (
            <div class="zone-chat">
                <h2>Zone de chat</h2>
                {mapedChat}
            </div>
        )
    }
}

export default ChatInterface;