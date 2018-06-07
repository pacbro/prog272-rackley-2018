import React, { Component } from 'react';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton'
import ActionAndroid from 'material-ui/svg-icons/action/android';
import tempAddressList from '../address-list';

class Address extends Component {
    constructor() {
        super();
        this.debug = false;
        this.canceled = false;
        this.state = {
            addressIndex: 0,
            addressList: [{}],
            address: tempAddressList[0]
        };
        this.log('Temp Address List:', tempAddressList);
    }

    componentDidMount() {
       this.getAddressList();
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    getAddressList() {
      fetch (/address-list)
      .then(addressListFromServer = address-list.json())
      .then(if (!this.canceled) {
        this.setState({addressList: addressListFromServer});
        this.setState({index: 0});)
}
    }
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

    setAddress = (offset) => { ... }

    log(message, message2 = '', message3 = '') {
        if (this.debug) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    render() {
        this.log('RENDER', this.props);
        <AddressShow
            address={this.state.address}
            setAddress={this.setAddress}
        />;

      }
}

export default Address;
