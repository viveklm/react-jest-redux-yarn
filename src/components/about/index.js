import React from 'react';
export const url = 'http://jsonplaceholder.typicode.com/posts'
export const fetchData = () => {
  return fetch(url);
}
export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: ''
    }
  }
  
  static defaultProps = { fetchData };

  componentDidMount = () => {
    var that = this;
    this.props.fetchData()
      .then(function (response) {
        if (response.status >= 400) {
          try {
            throw new Error("Bad response from server");
          } catch (e) {
            console.log(e)
            return '';
          }
        }
        return response.json();
      })
      .then(function (data) {
        that.setState({
          persons: data
        });
      });
  }

  render() {
    let content;
    if (this.state.persons) {
      content = this.state.persons.map((ele, key) => {
        return <li key={key}> {this.state.persons[key].title}</li>;
      })
    } else {
      content = ''; // whatever you want it to be while waiting for data
    }
    return (
      <div>
        <h1 className="about-page-title">About Page</h1>
        <ul>{content}</ul>
      </div>

    );
  }
}
