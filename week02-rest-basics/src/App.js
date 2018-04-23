import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      file: 'unknown',
      firstName: 'unknown',
      lastName: 'unknown',
      address: 'unknown',
      city: 'unknown',
      state: 'unknown',
      zip: 'unknown',
    }
  }
  getFileName = () => {
    console.log('getFileName called.');
    this.setState({ file: 'url-file.js' })
  };
  setAddress = () => {
    this.setState({
      firstName: 'Patty',
      lastName: 'Murray',
      address: '915 2nd Ave # 2988',
      city: 'Seattle',
      state: 'WA',
      zip: '98174'
    })
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">file: {this.state.file}</p>
        <p className="App-intro">firstName: {this.state.firstName}</p>
        <p className="App-intro">lastName: {this.state.lastName}</p>
        <p className="App-intro">address: {this.state.address}</p>
        <p className="App-intro">city: {this.state.city}</p>
        <p className="App-intro">state: {this.state.state}</p>
        <p className="App-intro">zip: {this.state.zip}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button id='getFile' onClick={this.getFileName}>Get File</button>
        <button className="setAddress" onClick={this.setAddress}>Set Address</button>
      </div>
    );
  }
}

export default App;
