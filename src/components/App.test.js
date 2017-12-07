import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('contains SelectionSidebar', () => {
    const component = shallow(<App />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<SelectionSidebar />'));
  });
  it('contains ChatContainer', () => {
    const component = shallow(<App />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<ChatContainer />'));
  });
  it('contains JsonSidebar', () => {
    const component = shallow(<App />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<JsonSidebar />'));
  });
});
