import React, { Component } from 'react';
import ChatInterface from './../../components/chatInterface/chatInterface';
import BetInterface from './../../components/betInterface/betInterface';
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
                    <div className="bet-interface-div">
                         <BetInterface/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpectatorView;