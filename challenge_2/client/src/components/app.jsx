import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      info: []
    }
  }

  componentDidMount() {
    axios.get('/api')
      .then(data => {
        console.log('Ajax call to api => ', data);
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <h1>Mini App Challenge 2</h1>
      </div>
    )
  }
}

export default App;
