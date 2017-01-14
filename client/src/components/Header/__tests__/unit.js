import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../';
import { Navbar } from 'react-bootstrap';

describe('<Header>', function () {

  //context delegation
  let me = this;

  beforeEach(() => {
    //default initializations
    me.defaultProps = {
      title: 'Schibsted REST Framework',
      version: 'v 3.1.1'
    };
  });

  it('renders correctly', () => {
    const wrapper = mount(
      <Header title={me.defaultProps.title} version={me.defaultProps.version}/>
    );
    expect(wrapper.prop('title')).toEqual('Schibsted REST Framework');
    expect(wrapper.prop('version')).toEqual('v 3.1.1');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have a Navbar', () => {
    const wrapper = shallow(<Header/>);
    let navbar = wrapper.find(<Navbar/>);
    expect(!!navbar).toBe(true);
  });

  it('should have a Navbar.Header', () => {
    const wrapper = shallow(<Header/>);
    let navbarHeader = wrapper.find(<Navbar.Header/>);
    expect(!!navbarHeader).toBe(true);
  });

  it('should have a Navbar.Brand', () => {
    const wrapper = shallow(<Header/>);
    let navbarBrand = wrapper.find(<Navbar.Brand/>);
    expect(!!navbarBrand).toBe(true);
  });

  it('should have an anchor link', () => {
    const wrapper = shallow(<Header/>);
    let a = wrapper.find('a');
    expect(!!a).toBe(true);
  });

  it('should have span inside an anchor link with title', () => {
    const wrapper = shallow(<Header title={me.defaultProps.title} version={me.defaultProps.version}/>);
    let spanTitle = wrapper.find('a span').at(0);
    expect(!!spanTitle).toBe(true);
    expect(spanTitle.text()).toBe(me.defaultProps.title);
  });

  it('should have span inside an anchor link with version', () => {
    const wrapper = shallow(<Header title={me.defaultProps.title} version={me.defaultProps.version}/>);
    let spanVersion = wrapper.find('a span').at(1);
    expect(!!spanVersion).toBe(true);
    expect(spanVersion.text()).toBe(me.defaultProps.version);
  });

});


