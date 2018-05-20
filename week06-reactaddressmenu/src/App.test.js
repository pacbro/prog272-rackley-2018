import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from "react-router-dom";
configure({ adapter: new Adapter() });

const getChild = (wrapper, element, index) => {
    const lastParagraph = wrapper
        .find(element)
        .childAt(index)
        .debug();
    console.log(lastParagraph);
};

describe('jest test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h1 className="App-title">Welcome to React</h1>;
        getChild(wrapper, 'h1', 1);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and reads paragraph text', () => {
        const wrapper = shallow(<App />);
        const unknownFile = <p className="App-intro">file: unknown</p>;
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(unknownFile)).toEqual(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const fileSign = <p className="App-intro">file: url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        getChild(wrapper, 'div', 1);
        expect(wrapper.contains(fileSign)).toBe(true);
    });
   
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><ElfHeader /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
});
