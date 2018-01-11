import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ChatMessage from './ChatMessage';

const sandbox = sinon.createSandbox();

describe('ChatMessage', () => {
  // run each test in isolation
  afterEach(() => sandbox.restore());

  it('renders bot message', () => {
    const component = shallow(<ChatMessage type="bot" text="hello" />);
    expect(component.find('p').text()).toEqual('hello');
  });
  it('renders user message', () => {
    const component = shallow(<ChatMessage type="user" text="hello" />);
    expect(component.find('p').text()).toEqual('hello');
  });
  it('renders chat option', () => {
    const component = shallow(<ChatMessage type="option" text="Texas" />);
    expect(component.find('button').text()).toEqual('Texas');
  });
});
