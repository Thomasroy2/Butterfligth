import React, { Component } from 'react';
import './loader.css';
import Modal from 'react-modal';
import Loader from 'react-loaders';

class LoaderComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const customStyles = {
      content: {
        top: '45%',
        left: '45%',
        right: 'auto',
        bottom: 'auto',
        padding: '10px'
      }
    }
    return (
      <Modal isOpen={this.props.isLoading} style={customStyles}>
        <div className="modal-content">
          <Loader type="ball-pulse" style={{transform: 'scale(0.7)'}} active />
          {/* <Loader type="ball-pulse-rise" active /> */}
          <p>{this.props.loadingMessage}</p>
        </div>
      </Modal>
    );
  }
}

export default LoaderComponent;