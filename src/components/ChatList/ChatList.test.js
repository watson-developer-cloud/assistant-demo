import React from 'react';
import { shallow } from 'enzyme';
import ChatList from './ChatList';

const mockMessages = [
  { sender: 'bot', text: 'first' },
];

describe('ChatList', () => {
  it('renders a list of messages', () => {
    const component = shallow(<ChatList messages={mockMessages} />);
    expect(component.find('div').text()).toEqual('<GenericMessage />');
  });
});
