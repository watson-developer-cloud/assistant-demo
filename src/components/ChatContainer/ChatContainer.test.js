import React from 'react';
import { shallow } from 'enzyme';
import ChatContainer from './ChatContainer';

const mockMessages = [
  { type: 'bot', content: 'hi' },
];

// TODO: replace with mocked function
const onUserInput = () => (
  'works'
);

describe('ChatContainer', () => {
  it('contains ChatList', () => {
    const component = shallow(<ChatContainer onUserInput={onUserInput} messages={mockMessages} />);
    expect(component.find('.chat-container').text()).toEqual(expect.stringContaining('<ChatList />'));
  });
  it('contains InputWithButton', () => {
    const component = shallow(<ChatContainer onUserInput={onUserInput} messages={mockMessages} />);
    expect(component.find('.chat-container').text()).toEqual(expect.stringContaining('<InputWithButton />'));
  });
});
