import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Address from './Address';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    container: {
        flexGrow: 1,
        textAlign: 'center'
    },
    rootBar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    })
});

setEdits = (name, event) => {
    var data = this.props.name;
    data[name] = event.target.value;
    this.setState({ edits: data });
};

addressEdit = address => {
    console.log(address);

    if (!address) {
        return this.setState({ editOpen: false });
    }

    this.setState({
        edits: address,
        editOpen: false
    });
};

save = () => {
    this.props.save(this.state.edits);
};

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOpen: false,
            edits: {
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }
        };
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Paper className={classes.rootBar}>
                    <p>{this.props.name.firstName}</p>
                    <p>{this.props.name.lastName}</p>
                    <Button
                        variant="raised"
                        color="secondary"
                        onClick={this.props.showAddress}
                    >
                        Show
                    </Button>

                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(-1, event)}
                    >
                        Back
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(1, event)}
                    >
                        Forward
                    </Button>
                    <div>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={() => this.setState({ editOpen: true })}
                        >
                            Edit
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.save}
                        >
                            Save
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={event =>
                                this.props.delete(this.props.name, event)
                            }
                        >
                            Delete
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}
export default AddressShow;
