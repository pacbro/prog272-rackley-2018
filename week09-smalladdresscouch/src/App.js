import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PouchDB from 'pouchdb';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressIndex: 10000,
            firstName: 'unknown',
            lastName: 'unknown',
            ids: []
        };
    }
    componentDidMount() {
        this.db = new PouchDB('addresses');
        //this.remoteCouch = 'http://192.168.2.25:5984/addresses';
        this.remoteCouch = false;
        this.syncDom = document.getElementById('sync-wrapper');
        this.db
            .changes({
                since: 'now',
                live: true
            })
            .on('change', this.showAddress);
    }
    addAddress = data => {
        const indexValue = this.state.addressIndex + 1;
        this.setState({ addressIndex: indexValue });
        const address = {
            _id: new Date().toISOString(),
            firstName: data.firstName,
            lastName: data.lastName,
            completed: false
        };
        this.db.put(address, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a r!');
            }
        });
    };
    showAddress = () => {
        const that = this;
        let ids = [];
        const getIds = this.state.ids.length === 0;
        this.db.allDocs({ include_docs: true, descending: true }, function(
            err,
            doc
        ) {
            console.log(doc.rows);
            if (getIds) {
                ids = doc.rows.map(row => {
                    return row.id;
                });
                that.setState({ ids: ids });
            }
        });
    };
    handleFirst = event => {
        this.setState({ firstName: event.target.value });
    };
    handleLast = event => {
        this.setState({ lastName: event.target.value });
    };
    addAddressReal = () => {
        const indexValue = this.state.addressIndex + 1;
        this.setState({ addressIndex: indexValue });
        const address = {
            _id: new Date().toISOString(),
            firstName: this.state.firstName,
            // YOU GET THE LAST NAME
            completed: false
        };
        this.db.put(address, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a r!');
            }
        });
        this.state.ids.push(address._id);
        // You call this.setState and set the new ids value.
    };
    update = () => {
        this.db.get(this.state.ids[0]).then(address => {
            address.completed = true;
            this.db.put(address);
        });
    };

    render() {
        return (
            <div className="App">
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-simple">First Name</InputLabel>
                    <Input
                        id="name-simple"
                        value={this.state.firstName}
                        onChange={this.handleFirst}
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-simple">Last Name</InputLabel>
                    <Input
                        id="name-simple"
                        value={this.state.lastName}
                        onChange={this.handleLast}
                    />
                </FormControl>
                <Button
                    color="secondary"
                    variant="raised"
                    onClick={e =>
                        this.addAddress(
                            { firstName: 'foo', lastName: 'bar' },
                            e
                        )
                    }
                >
                    Insert FooBar
                </Button>
                <Button
                    color="secondary"
                    variant="raised"
                    onClick={this.showAddress}
                >
                    Show
                </Button>
            </div>
        );
    }
}

export default App;
