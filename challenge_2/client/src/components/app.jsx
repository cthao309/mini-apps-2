import React, { Component } from 'react';
import axios from 'axios';

import Graph from './Graph/Graph.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get('/api')
      .then(data => {
        console.log('Ajax call to api => ', data);
        this.setState({
          data: data,
          isLoading: false
        })
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
        { this.state.isLoading && <i className="fa fa-spinner fa-spin"></i> }
        { !this.state.isLoading && <Graph data={this.state.data}/> }
      </div>
    )
  }
}

export default App;
