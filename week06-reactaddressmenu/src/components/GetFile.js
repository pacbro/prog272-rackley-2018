import React, { Component } from 'react';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';

class GetFile extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }
    getFileName = () => {
        console.log('getFileName called.');
        this.setState({ file: 'url-file.js' });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">file: {this.state.file}</p>
<RaisedButton
    label="Set Address"
    labelPosition="before"
    primary={true}
        icon={
        <FontIcon class="material-icons" color={red500}>
            rss_feed
        </FontIcon>
    }
    style={styles.button}
    onClick={this.getFileName}
/>
            </div>
            
            );
    }
}

export default GetFile;
