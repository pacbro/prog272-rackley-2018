import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Address from './components/Address';
import addresses from './components/address-list';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDOM.render(
    
       <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
