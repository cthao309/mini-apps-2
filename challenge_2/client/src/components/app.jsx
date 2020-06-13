import React, { Component } from 'react';
import axios from 'axios';

import Graph from './Graph/Graph.jsx';

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
        this.setState({ info: data })
      })
      .catch(err => console.error(err))
  }

  render() {
    const alignContent = {
      margin: '2% auto',
      textAlign: 'center'
    }

    return (
      <div style={alignContent}>
        <h1>Mini App Challenge 2</h1>
        <Graph />
      </div>
    )
  }
}

export default App;
