import React from 'react';
import AddressShow from '../components/AddressShow';
import Address from '../components/Address';
import App from '../components/App';
import GetFile from '../components/GetFile';
import ElfHeader from '../components/ElfHeader';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from '../address-list';

beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
        const promise = new Promise(resolve => {
            resolve({
                ok: true,
                json: function() {
                    return [
                        {
                            firstName: 'Patty',
                            lastName: 'Murray',
                            address: '154 Russell Senate Office Building',
                            city: 'Washington',
                            state: 'D.C.',
                            zip: '20510',
                            phone: '(202) 224-2621',
                            fax: '(202) 224-0238',
                            tollfree: '(866) 481-9186'
                        }
                    ];
                }
            });
        });
        return promise;
    });
});

describe('SnapShot Tests', function() {

    it('should take an AddressShow snapshot', () => {
        const elfTree = shallow(<AddressShow address={addresses[0]}/>);
        expect(elfTree).toMatchSnapshot();
    });
    it('should take an Address snapshot', () => {
        const elfTree = shallow(<Address address={addresses[0]}/>);
        expect(elfTree).toMatchSnapshot();
    });
    it('should take an App snapshot', () => {
        const elfTree = shallow(<div className="App"></div>);
        expect(elfTree).toMatchSnapshot();
    });
    it('should take an GetFile snapshot', () => {
        const elfTree = shallow(  <p className="App-intro">file: {this.state.file}</p>);
        expect(elfTree).toMatchSnapshot();
    });
    it('should take an ElfHeader snapshot', () => {
        const elfTree = shallow(<ul><li><Link to="/">Address</Link></li><li><Link to="/get-file">Get File</Link></li></ul>);
        expect(elfTree).toMatchSnapshot();
    });
    describe('jest test', function() {

    const debug = true;

    it('renders without crashing', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();

    });

    it('should find Header', () => {
        const wrapper = shallow(<App />);
        if (debug) {
            console.log(wrapper.debug());
        }
        const nineSign = <ElfHeader />;
        expect(wrapper.contains(nineSign)).toBe(true);
    });
});
it('renders state of File paragraph before button click', () => {
    const wrapper = shallow(<ApiFoo appInit={appInit} />);
    const nineSign = <Text>A status: status will go here</Text>;
    elfDebugEnzyme.getFirst(wrapper, 'p');
    expect(wrapper.contains(nineSign)).toBe(true);
});
it('renders state of status paragraph after button click', () => {
    const wrapper = shallow(<ApiFoo appInit={appInit} />);
    const statusParagraph = (
        <Text>A status: status did go here</Text>
    );
    wrapper.find('#queryServer').props().onPress();
    setImmediate(() => {
        wrapper.update();
        try {
            expect(wrapper.contains(statusParagraph)).toBe(true);
        } catch (e) {
            console.log(e);
        }
    });
});
it('finds a text element', () => {
    const wrapper = shallow(<ElfHeader />);
    const link = <Text>Home</Text>;
    expect(wrapper.dive().contains(link)).toBe(true);
});

it('finds a link', () => {
    const wrapper = shallow(<ElfHeader />);
    const link = <Link><Text>Home</Text></Link>;
    expect(wrapper.dive().containsMatchingElement(link)).toBe(true);
});
function createWrapper() {
    return shallow(
        <MuiThemeProvider>
            <GitUserUI user={userData} />
        </MuiThemeProvider>
    );
}

it('should take a snapshot', () => {
    const elfTree = createWrapper();
    expect(elfTree).toMatchSnapshot();
});

it('renders GitUserUI', () => {
    const wrapper = createWrapper();
    elfDebugEnzyme.getAllDive(wrapper, false);
    const nineSign = <p className="App-intro">login: unknowns</p>;
    expect(wrapper.dive().containsMatchingElement(nineSign)).toBe(true);
});
});
