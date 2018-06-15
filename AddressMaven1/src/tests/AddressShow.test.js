import React from 'react';
import ReactDOM from 'react-dom';
import Address from '././components/AddressShow';]
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const getChild = (wrapper, element, index) => {
    const lastParagraph = wrapper
        .find(element)
        .childAt(index)
        .debug();
    console.log(lastParagraph);
};

describe('AddressShow test', function() {
let wrapper = null;

const setAddress = () => {
        const address=addresses[1];
        wrapper.setProps({ address: address });
};

const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={addresses[0]} />);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
};

const afterClickFieldTest = (name) => {
    wrapper = shallow(<AddressShow address={addresses[0]} setAddress={setAddress}/>);
    const patty = <p className="App-intro">{name}</p>;
    wrapper.find('#setAddress').simulate('click');
    //console.log(wrapper.debug());
    expect(wrapper.contains(patty)).toBe(true);
};

it('renders and displays the first name', () => {
    defaultFieldTest('First Name: unknown', 0);
    afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
});
}
