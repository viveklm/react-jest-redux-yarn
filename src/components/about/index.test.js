import React from 'react'
import ReactDOM from 'react-dom';
import About from '../about'
import { connect } from 'react-redux'

import expect from 'expect';
import { shallow } from 'enzyme';


describe('Page Title', () => {
  it('Check page title', () => {
    const about = shallow(<About />);
    expect(about.find('h1.about-page-title').text()).toEqual('About Page');
  });

 
});

