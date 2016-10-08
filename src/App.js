import React, { Component } from 'react';
import logo from './logo.js';
import './App.scss';

import HomePage from './home-page/HomePage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="title" dangerouslySetInnerHTML={{ __html: logo }} >
          </div>
     			<div className="description">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
