import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import PortfolioItem from './PortfolioItem.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PortfolioItem
      key="1"
      name="title"
      thumbnail=""
      description="desc"
      />, div);
});

it('reacts to click with class change', function () {
  const portfolioItem = shallow(
    <PortfolioItem
      key="1"
      name="title"
      thumbnail=""
      description="desc"
      />
  );

  expect(portfolioItem.find('.portfolioItem').hasClass('active')).toEqual(false);

  portfolioItem.find('.photo').simulate('click');

  expect(portfolioItem.find('.portfolioItem').hasClass('active')).toEqual(true);
});
