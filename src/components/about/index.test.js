import React from 'react'
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import About, { fetchData, url } from '../about'
import { connect } from 'react-redux'
import expect from 'expect';
import toJson from 'enzyme-to-json';
describe('Page Title', () => {
  it('Check page title', () => {
    const about = shallow(<About />);
    expect(about.find('h1.about-page-title').text()).toEqual('About Page');
  });
  it('Check page content data when persons is empty', () => {
    const about = shallow(<About />);
    about.setState({ persons: '' });
    expect(about.find('ul').text()).toEqual('');
  });
  it('Check page content  data  when persons has array', () => {
    const about = shallow(<About />);
    about.setState({
      persons: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }]
    });
    expect(about.find('div').find('ul').text()).toEqual(" sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  });
  it('Check componentDidMount and fetch service call', () => {
    const testData = {
      status: 200,
      json: (response) => { return response },
      body: {
        persons: [{
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        }]
      }
    };
    const fetchData = sinon.stub().resolves(testData);
    const about = mount(<About fetchData={fetchData} />);
    expect(fetchData.callCount).toEqual(1);
    //const tree = toJson(about);
    // expect(tree).toMatchSnapshot();
  });
  it('Check throw new Error ', () => {
    const testData = {
      status: 400,
      json: (response) => { return response },
      body: {
        persons: [{
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        }]
      }
    };

    const fetchData = sinon.stub().resolves(testData);
    const about = mount(<About fetchData={fetchData} />);
    expect(fetchData.callCount).toEqual(1);
    // const tree = toJson(about);
    // expect(tree).toMatchSnapshot();
  });
  it('Check fetchData call', () => {
    sinon.stub(window, 'fetch');
    fetchData();
    expect(fetch.firstCall.args[0]).toEqual(url);
    fetch.restore();
  });
});

