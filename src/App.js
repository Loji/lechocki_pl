import React, { Component } from 'react';
import logo from './logo.js';
import './App.scss';

import HomePage from './home-page/HomePage.js';

import anime from 'animejs';

class App extends Component {
  componentDidMount() {
    if(typeof requestAnimationFrame === 'undefined') {
      this.fixRequestAnimationFrame();
    }

    var setDashoffset = function (el) {
      var l = el.getTotalLength();
      el.setAttribute('stroke-dasharray', l);
      return [-l, 0];
    }

    var letters = anime({
      targets: 'path.circle',
      transform: ['translate(0 -150)', 'translate(0 0)'],
      duration: 2400,
      delay: 600
    });

    var lines = anime({
      targets: ['#line-left', '#line-right'],
      strokeDashoffset: setDashoffset,
      duration: 2000,
      easing: 'easeOutCubic',
      complete: function () {
        document.documentElement.className += ' animation-done';
      }
    });
  }

  //hotfix for browsers that have no normal requestAnimationFrame function
  fixRequestAnimationFrame() {
    window.requestAnimationFrame = () => (
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (/* function */ callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
  }

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
