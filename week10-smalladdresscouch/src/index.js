import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const themePurple = createMuiTheme({
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
});

syncError = () => {
    this.syncDom.setAttribute('data-sync-state', 'error');
};

sync = () => {
    this.syncDom.setAttribute('data-sync-state', 'syncing');
    var opts = {live: true};
    this.db.replicate.to(this.remoteCouch, opts, this.syncError);
    this.db.replicate.from(this.remoteCouch, opts, this.syncError);
};
ReactDOM.render(
    <MuiThemeProvider theme={themePurple}>
        <App/>
    </MuiThemeProvider>,

    document.getElementById('root')
);

registerServiceWorker();
