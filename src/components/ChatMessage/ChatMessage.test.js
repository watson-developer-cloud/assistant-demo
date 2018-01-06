import React from 'react';
import { shallow } from 'enzyme';
import ChatMessage from './ChatMessage';

describe('GenericMessage', () => {
  it('renders bot message', () => {
    const component = shallow(<ChatMessage type="bot" text="hello" />);
    expect(component.find('p').text()).toEqual('hello');
  });
  it('renders user message', () => {
    const component = shallow(<ChatMessage type="user" text="hello" />);
    expect(component.find('p').text()).toEqual('hello');
  });
});
