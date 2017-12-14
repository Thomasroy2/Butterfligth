import React, { Component } from 'react';
import './loader.css';
import Modal from 'react-modal';
import Loader from 'react-loaders';

class LoaderComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const customStyles = {
      content: {
        top: '40%',
        left: '40%',
        right: '40%',
        bottom: '40%',
        padding: '10px'
      }
    }
    return (
      <Modal isOpen={this.props.isLoading} style={customStyles}>
        <div className="modal-content">
          <Loader type="ball-pulse" style={{ transform: 'scale(0.7)' }} active />
          <p>{this.props.loadingMessage}</p>
        </div>
      </Modal>
    );
  }
}

export default LoaderComponent;