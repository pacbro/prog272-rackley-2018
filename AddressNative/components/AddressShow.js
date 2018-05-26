import React, { Component } from 'react';
import Address from './Address';
import PropTypes from 'prop-types';
import styles from './elf-styles';

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
            <view className="App">
                <text className="App-intro">
                    firstName: {this.props.address.firstName}
                </text>
                <AddressShow address={this.state.address} />
<View style={styles.buttonView}>
    <Button
        onPress={this.props.setAddress}
        title="Get Data"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
  
            </view>
        );
    }
}
