import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import './App.scss';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="/portfolio" activeClassName="active">Portfolio</Link>
      </div>
    );
  }
}

export default Menu;
