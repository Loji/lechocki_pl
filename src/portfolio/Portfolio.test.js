import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portfolio />, div);
});
