import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      file: 'unknown',
    }
  }
  getFileName = () => {
    console.log('getFileName called.');
    this.setState({ file: 'url-file.js' })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">file: {this.state.file}</p>
        <button id='getFile' onClick={this.getFileName}>Get File</button>
      </div>
    );
  }
}

export default App;
