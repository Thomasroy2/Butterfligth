import React, { Component } from 'react';
import ChatInterface from './../../components/chatInterface/chatInterface';
import PariInterface from './../../components/pariInterface/pariInterface';
import './spectatorView.css';

class SpectatorView extends Component {

    render() {
        return (
            <div>
                <div className="spectator-interface-chat">
                    <div className="vide-interface-div">
                    </div>
                    <div className="chat-interface-div">
                        <ChatInterface/>
                    </div>
                </div>
                <div className="spectator-interface-bas">
                    <div className="pari-interface-div">
                         <PariInterface/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpectatorView;