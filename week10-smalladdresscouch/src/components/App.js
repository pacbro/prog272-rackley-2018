import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Address from './Address';
import ElfHeader from './ElfHeader'
import { BrowserRouter, Route } from 'react-router-dom';
import dataManager from '../tools/PouchDbManager';


class App extends Component {

const styles = theme => ({
    container: {
      flexGrow: 1
    }
});

componentDidMount() {
    this.db = dataManager.init();
}

  render() {
    <BrowserRouter>
    <div className="App">
        <ElfHeader />
        <Route id="home" exact path="/" component={Home} />
        <Route
            id="address"
            path="/address"
            render={props => (
                <Address {...props} dataManager={dataManager} />
            )}
        />
        <Route
            id="initDb"
            path="/init-db"
            render={props => (
                <InitializeDatabase
                    {...props}
                    dataManager={dataManager}
                />
            )}
        />
    </div>
</BrowserRouter>
  }
}

export default App;
