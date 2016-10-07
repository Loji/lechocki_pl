import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import PortfolioItem from './portfolio/PortfolioItem';
import HomePage from './home-page/HomePage.js';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/portfolio" component={PortfolioItem}>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
