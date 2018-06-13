import React, { Component } from 'react';
import '../App.css';
import Address from './Address';
import PropTypes from 'prop-types';
import styles from './elf-styles';
import FontIcon from '@material-ui/core/FontIcon';
import { red500 } from '@material-ui/core/styles/colors';
import Button from '@material-ui/core/Button';

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
          const {classes} = this.props;
   const editDialog = this.state.editOpen ? (
       <AddressEdit
           address={this.props.name}
           open={this.state.editOpen}
           addressEdit={this.addressEdit}
       />
   ) : (
       <div/>
   );

   return (
let editopen = false;
       <div className={classes.container}>
            <div className="App">
                <p className="App-intro">
                    firstName: {this.props.address.firstName}
                </p>
                <AddressShow address={this.state.address} />
                return (

                      <div className={classes.container}>
                          // ALL YOUR ADDRESS SHOW JSX HERE
                          <Button
                              color="secondary"
                              variant="raised"
                              onClick={() => this.setState({editOpen: true})}
                           >
                              Edit
                          </Button>
                        {editDialog}
                      <div>
                  )
              }}
