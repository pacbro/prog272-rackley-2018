import React, { Component } from 'react';
import '../App.css';
import addresses from './address-list';
import RaisedButton from 'material-ui/RaisedButton'
import ActionAndroid from 'material-ui/svg-icons/action/android';

export default class Address extends React.Component {
     constructor(props) {
        super(props);
        this.debug = false;
        this.log('CONSTRUCTOR', this.props.address);
        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];

        this.addressIndex = 0;
        this.state = {
            address: AddressList[this.addressIndex],
            firstName: address.firstName,
            lastName: address.lastName,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree
        };
        this.debug = true;
    }

    setAddress = () => {
        const address = this.props.addressList[1];

        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree
        });
    };

    log(message, message2 = '', message3 = '') {
        if (this.debug) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    setAddress = event => {
        this.addressIndex = 1;

        this.setState({
            address: addressList[this.addressIndex]
        });
    };

 render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Expo Calvert!
                </Text>

                {/* Eventually we will link in AddressShow here, but not yet. */}
                {/* For now, just comment it out, using the syntax I have used here. */}
            </View>
        );
}
}

export default Address;
