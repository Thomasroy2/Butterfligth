import React, { Component } from 'react';
import './matchEnded.css';
import Modal from 'react-modal';
import Loader from 'react-loaders';

class MatchEnded extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const customStyles = {
      content: {
        top: '45%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0'
      }
    }
    console.log(this.props);
    return (
      <Modal isOpen={this.props.matchEnded} style={customStyles}>
        <div className="modal-content">
          <p>{this.props.won ? 'Vous avez gagnez!' : 'Vous avez perdu!'}</p>
        </div>
      </Modal>
    );
  }
}

export default MatchEnded;