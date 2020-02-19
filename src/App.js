import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cloeck from './cloeck'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Cloeck />
        </div>
      </div>
    );
  }
}

export default App;
