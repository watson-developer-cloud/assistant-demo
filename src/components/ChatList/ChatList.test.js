import React from 'react';
import { shallow } from 'enzyme';
import ChatList from './ChatList';

const mockMessages = [
  { type: 'bot', content: 'first' },
];

const onUserInput = () => (
  'works'
);

describe('ChatList', () => {
  it('renders a list of messages', () => {
    const component = shallow(<ChatList messages={mockMessages} onUserInput={onUserInput} />);
    expect(component.find('div').text()).toEqual('<ChatMessage />');
  });
});
