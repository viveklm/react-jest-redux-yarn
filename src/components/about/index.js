import React from 'react'


export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: ''
    }
  }

  componentDidMount() {

    var that = this;
    var url = 'http://jsonplaceholder.typicode.com/posts'

    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
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
        content = this.state.persons.map((ele,key) => {
         return <li key={key}> {this.state.persons[key].title}</li>;
        })
      } else { 
        content = ''; // whatever you want it to be while waiting for data
      }
    return (
      <div>
        <h1 className="about-page-title">About Page</h1>
        {content}
      </div>

    );
  }
}
