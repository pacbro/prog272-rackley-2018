import React from 'react';
import ReactDOM from 'react-dom';
import Address from '././components/Address';
import addresses from '././components/address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import dataManager from '../assets/FakeDataManager';

configure({ adapter: new Adapter() });

let  wrapper = null;

beforeEach(() => {
    wrapper = shallow(<Address
       dataManager={dataManager}
       addressList={addresses} />);
});

const addressProp = wrapper => wrapper
  .find('WithStyles(AddressShow)')
  .prop('address');

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

const getChild = (wrapper, element, index) => {
    const lastParagraph = wrapper
        .find(element)
        .childAt(index)
        .debug();
    console.log(lastParagraph);
};

describe('address test', function() {

const setAddress = (wrapper) => {
      wrapper.instance().getAddress();
      setImmediate(() => {
              wrapper.update();
      });
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider theme={themeDark}><Address/></MuiThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders and displays the default first name', () => {
    expect(addressProp(wrapper).firstName).toEqual('unknown');
});

it('renders and displays the default first name from FakeData', () => {
    expect(wrapper.state().address.firstName).toEqual('Patty');
});

it('renders state of firstName after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.firstName).toEqual('Robert');
});

it('renders and displays the default last name', () => {
    expect(addressProp(wrapper).lastName).toEqual('unknown');
});

it('renders and displays the default last name from FakeData', () => {
    expect(wrapper.state().address.lastName).toEqual('Murray');
});

it('renders state of lastName after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.lastName).toEqual('Aderholt');
});


it('renders and displays the default address', () => {
    expect(addressProp(wrapper).street).toEqual('unknown');
});

it('renders and displays the default address from FakeData', () => {
    expect(wrapper.state().address.street).toEqual('154 Russell Senate Office Building');
});

it('renders state of address after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.street).toEqual('235 Cannon House Office Building');
});


it('renders and displays the default address', () => {
    expect(addressProp(wrapper).street).toEqual('unknown');
});

it('renders and displays the default address from FakeData', () => {
    expect(wrapper.state().address.street).toEqual('154 Russell Senate Office Building');
});

it('renders state of address after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.street).toEqual('235 Cannon House Office Building');
});

it('renders and displays the default zip', () => {
    expect(addressProp(wrapper).zip).toEqual('unknown');
});

it('renders and displays the default zip from FakeData', () => {
    expect(wrapper.state().address.zip).toEqual('20510');
});

it('renders state of firstName after zip', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.zip).toEqual('20515-0104');
});

});
