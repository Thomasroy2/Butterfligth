import React, { Component } from 'react';
import FigthRoom from './../view/figthRoom/figthRoom';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="figth-view-div">
          <FigthRoom />
        </div>
      </div>
    );
  }
}

export default App;
