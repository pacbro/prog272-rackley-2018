import React, { Component } from 'react';
import '../App.css';
import addresses from './address-list';


class Address extends Component {
    constructor(props) {
        super(props);
    this.debug = false;
    this.log('CONSTRUCTOR', this.props.address);
    console.log('ADDRESS PROPS', typeof this.props);
    const address = this.props.addressList[0];
    
                this.addressIndex=0;        
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
        
    }
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
      })    
};
  


log(message, message2 = '', message3 = '') {

    if (this.debug) {
        const label = this.constructor.name + ': '; 
        console.log(label, message, message2, message3);
    }
}

setAddress = (event) => {
    this.addressIndex = 1;   

    this.setState({
        address: addressList[this.addressIndex]
    })
};

render() {
    this.log("RENDER", this.props);
    <AddressShow
    address={this.state.address}
    setAddress={this.setAddress}
/>
}

}
export default Address;
