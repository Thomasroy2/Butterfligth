import React, { Component } from 'react';
import './matchEnded.css';
import Modal from 'react-modal';

class MatchEnded extends Component {

  render() {
    const customStyles = {
      content: {
        top: '45%',
        left: '45%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.75)',
        border: '4px solid #ef43d6'
      }
    }
    console.log(this.props);
    return (
      <Modal isOpen={this.props.matchEnded} style={customStyles}>
        <div className="modal-content">
          <p>{this.props.won ? 'Vous avez gagné!' : 'Vous avez perdu!'}</p>
        </div>
      </Modal>
    );
  }
}

export default MatchEnded;