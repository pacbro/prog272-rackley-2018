import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <p>Test prop: {this.props.testProp}</p>
        <p>My prop: {this.props.myProp}</p>
      </div>
    );
  }
}

App.propTypes = {
    appInit: PropTypes.shape({
      testProp: PropTypes.number,
      myProp: PropTypes.number
    })
};

export default App;
