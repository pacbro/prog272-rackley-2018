import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Address from './components/Address'
import addresses from './address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('jest test', function() {

   it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
   });

   it('renders and reads H1 text', () => {
      const wrapper = shallow(<App />);
      const welcome = <h1 className="App-title">Welcome to React</h1>;
      const h1Data = wrapper.find('header').childAt(1).debug();
      console.log(h1Data);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and reads paragraph text', () => {
      const wrapper = shallow(<App />);
      const unknownFile = <p className="App-intro">file: unknown</p>;
      const paragraph = wrapper.find('div').childAt(1).debug();
      console.log(paragraph);
      expect(wrapper.contains(unknownFile)).toEqual(true);
   });

   it('renders state of File paragraph after button click', () => {
      const wrapper = shallow(<App />);
      const fileSign = <p className="App-intro">file: url-file.js</p>;
      wrapper.find('#getFile').simulate('click');
      const paragraphData = wrapper.find('div').childAt(1).debug();
      console.log(paragraphData);
      expect(wrapper.contains(fileSign)).toBe(true);
   });

   it('renders and displays the default first name', () => {
      const wrapper = shallow(<App />);
      const welcome = <p className="App-intro">firstName: unknown</p>;
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default first name', () => {
      const wrapper = shallow(<App />);
      const welcome = <p className="App-intro">firstName: unknown</p>;
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default last name', () => {
      const wrapper = shallow(<App />);
      const welcome = <p className="App-intro">lastName: unknown</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default address', () => {
      const wrapper = shallow(<App />);
      const welcome = <p className="App-intro">address: unknown</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default city', () => {
      const wrapper = shallow(<App />);
      const welcome = <p className="App-intro">city: unknown</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default state', () => {
      const wrapper = shallow(<App />);
      const welcome = <p className="App-intro">state: unknown</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default zip', () => {
      const wrapper = shallow(<App />);
      const welcome = <p className="App-intro">zip: unknown</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the first name after setAddress button click', () => {
      const wrapper = shallow(<App />);
      wrapper.find('.setAddress').simulate('click');
      const welcome = <p className="App-intro">firstName: Patty</p>;
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the last name after setAddress button click', () => {
      const wrapper = shallow(<App />);
      wrapper.find('.setAddress').simulate('click');
      const welcome = <p className="App-intro">lastName: Murray</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the address after setAddress button click', () => {
      const wrapper = shallow(<App />);
      wrapper.find('.setAddress').simulate('click');
      const welcome = <p className="App-intro">address: 915 2nd Ave # 2988</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default city after setAddress button click', () => {
      const wrapper = shallow(<App />);
      wrapper.find('.setAddress').simulate('click');
      const welcome = <p className="App-intro">city: Seattle</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default state after setAddress button click', () => {
      const wrapper = shallow(<App />);
      wrapper.find('.setAddress').simulate('click');
      const welcome = <p className="App-intro">state: WA</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('renders and displays the default zip after setAddress button click', () => {
      const wrapper = shallow(<App />);
      wrapper.find('.setAddress').simulate('click');
      const welcome = <p className="App-intro">zip: 98174</p>
      const lastParagraph = wrapper.find('p').last().debug();
      console.log(lastParagraph);
      expect(wrapper.contains(welcome)).toEqual(true);
   });
});