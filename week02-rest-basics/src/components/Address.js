import React, { Component } from 'react';
import '../App.css';
import addresses from './address-list';

class Address extends Component {
    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree
        };
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
    render() {
        return (
            <div className="Address">
                <p className="App-intro">firstName: {this.state.firstName}</p>
                <p className="App-intro">lastName: {this.state.lastName}</p>
                <p className="App-intro">address: {this.state.address}</p>
                <p className="App-intro">city: {this.state.city}</p>
                <p className="App-intro">state: {this.state.state}</p>
                <p className="App-intro">zip: {this.state.zip}</p>
                <p className="App-intro">phone: {this.state.phone}</p>
                <p className="App-intro">fax: {this.state.fax}</p>
                <p className="App-intro">tollFree: {this.state.tollFree}</p>

                <button className="setAddress" onClick={this.setAddress}>
                    Set Address
                </button>
            </div>
        );
    }
}

export default Address;
