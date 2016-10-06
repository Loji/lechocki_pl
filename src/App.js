import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import HomePage from './home-page/HomePage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="title">
            {logo}
          </div>
          <HomePage />
        </div>
      </div>
    );
  }
}

export default App;
