import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Title /><Title /><Title /><Title /><Title />
      </div>
    );
  }
}

export default App;
