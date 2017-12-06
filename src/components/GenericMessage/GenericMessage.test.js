import React from 'react';
import { shallow } from 'enzyme';
import GenericMessage from './GenericMessage';

describe('GenericMessage', () => {
  it('renders bot message', () => {
    const component = shallow(<GenericMessage type="bot" text="hello" />);
    expect(component.find('p').text()).toEqual('hello');
  });
  it('renders user message', () => {
    const component = shallow(<GenericMessage type="user" text="hello" />);
    expect(component.find('p').text()).toEqual('hello');
  });
});
