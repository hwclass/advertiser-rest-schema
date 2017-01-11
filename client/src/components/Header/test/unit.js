import React from 'react';
import { shallow } from 'enzyme';
import Header from '../';

describe('<Header>', () => {

  beforeEach(() => {
    console.log('running unit tests for Header component...');
  });

  it('should have a Navbar component', (() => {
    const defaultProps = {};
    const wrapper = shallow(<Header {...defaultProps}/>);
    expect(wrapper.find('Navbar').length).toBe(1);
  });

});