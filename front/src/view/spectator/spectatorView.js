import React, { Component } from 'react';
import ChatInterface from './../../components/chatInterface/chatInterface';
import PariInterface from './../../components/pariInterface/pariInterface';
import FightInterface from './../../components/betFightZone/betFightZone';
import './spectatorView.css';

class SpectatorView extends Component {

    render() {
        return (
            <div>
                <div className="spectator-interface-chat">
                    <div className="fight-interface-div">
                        <FightInterface/>
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