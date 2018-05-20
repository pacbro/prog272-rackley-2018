import React, { Component } from 'react';
import '../App.css';
import Address from './Address';
import PropTypes from 'prop-types';
import styles from './elf-styles';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
        phone: PropTypes.string,
        fax: PropTypes.string,
        tollfree: PropTypes.string
    }),
    setAddress: PropTypes.func
};

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.debug = true;
        if (this.debug) {
            console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
        }
    }

    log(message, message2 = '', message3 = '') {
        if (typeof message === 'object') {
            message = JSON.stringify(message, null, 4);
        }
        if (typeof message2 === 'object') {
            message2 = JSON.stringify(message2, null, 4);
        }
        if (typeof message3 === 'object') {
            message3 = JSON.stringify(message3, null, 4);
        }
        if (this.debug) {
            console.log(message, message2, message3);
        }
    }
    render() {
        if (this.debug) {
            console.log('ADDRESS RENDER');
        }
        return (
            <div className="App">
                <p className="App-intro">
                    firstName: {this.props.address.firstName}
                </p>
                <AddressShow address={this.state.address} />

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
    onClick={this.props.setAddress}
/>
            </div>
        );
    }
}
