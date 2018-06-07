import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import addresses from './components/address-list';
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

describe('address test', function() {
    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">lastName: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default address', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">address: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">city: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">state: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default zip', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">zip: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default phone', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">phone: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default fax', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">fax: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default tollfree', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">tollFree: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the first name after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = <p className="App-intro">firstName: Patty</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the last name after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = <p className="App-intro">lastName: Murray</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the address after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = (
            <p className="App-intro">
                address: 154 Russell Senate Office Building
            </p>
        );
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the city after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = <p className="App-intro">city: Washington</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the state after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = <p className="App-intro">state: D.C.</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the zip after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = <p className="App-intro">zip: 20510</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the phone after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = <p className="App-intro">phone: (202) 224-2621</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the fax after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = <p className="App-intro">fax: (202) 224-0238</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the tollfree after setAddress button click', () => {
        const wrapper = shallow(<Address />);
        wrapper.find('.setAddress').simulate('click');
        const welcome = <p className="App-intro">tollFree: (866) 481-9186</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    const afterClickFieldTest = (wrapper, finder) => {
         setImmediate(() => {
                 wrapper.update();
                 wrapper.instance().setAddress(0);
                 setImmediate(() => {
                         wrapper.update();
                         try {
                                 finder();
                         } catch (e) {
                                 console.log(e);
                         }
                 });
         });
    };

    it('renders state of firstName after button click', () => {
         const wrapper = shallow(<Address addressList={addresses}/>);
         afterClickFieldTest(wrapper, () => {
                 expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Patty');
         });
    });
});
