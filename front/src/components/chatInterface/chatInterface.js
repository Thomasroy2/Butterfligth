import React, { Component } from 'react';
import './chatInterface.css';

class ChatInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
          chat: props.chat,
          author:props.author,
          message:props.message
        }
      }
    
      componentWillReceiveProps(props) {
        this.setState({
            chat: props.chat
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
                <form onSubmit={this.sendMessage}>
                    <input id="messageInput"type="text" onChange={this.newMessage} value={this.state.message}/>
                    <label>
                        Post as:
                        <input type="text" value={this.state.author} onChange={this.changeAuthor}/>
                    </label>
                    <input type="submit" value="Send Message" />
                </form>
            </div>
            
        )
    }
}

export default ChatInterface;