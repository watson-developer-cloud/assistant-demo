import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ChatList from './ChatList';

const sandbox = sinon.createSandbox();
const onUserInputSpy = sinon.spy();
const mockMessages = [
  { type: 'bot', content: 'first' },
  { type: 'user', content: 'second' },
  { type: 'option', content: [{ label: 'Texas', value: 'texas' }] },
];

describe('ChatList', () => {
  // run each test in isolation
  afterEach(() => sandbox.restore());

  // it('renders a ChatMessage component', () => {
  //   const component = shallow(<ChatList messages={mockMessages} onUserInput={onUserInputSpy} />);
  //   expect(component.find('div').text()).toEqual(expect.stringContaining('<ChatMessage />'));
  // });
  it('renders ChatMessage for each item in messages array', () => {
    const component = shallow(<ChatList messages={mockMessages} onUserInput={onUserInputSpy} />);
    expect(component.find('.chat-list').children()).toHaveLength(5);
  });
  it('renders ChatOptionList when type is option', () => {
    const component = shallow(<ChatList messages={mockMessages} onUserInput={onUserInputSpy} />);
    expect(component.find('.chat-list').text()).toEqual(expect.stringContaining('<ChatOptionList />'));
  });
});
