import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      info: []
    }
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
