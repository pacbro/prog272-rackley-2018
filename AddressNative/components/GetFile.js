import React, { Component } from 'react';
import '../App.css';
import { Text, View, Button } from 'react-native';
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
            <view className="App">
                <text className="App-intro">file: {this.state.file}</text>
                <View style={styles.buttonView}>
                    <Button
                        onPress={this.getFile}
                        title="Get Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </view>
        );
    }
}

export default GetFile;
