import React from 'react';
import { shallow } from 'enzyme';
import ChatContainer from './ChatContainer';

const mockMessages = [
  { user: 'bot', text: 'hi' },
];

describe('ChatContainer', () => {
  it('contains ChatHeader', () => {
    const component = shallow(<ChatContainer onEnterText={null} messages={mockMessages} />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<ChatHeader />'));
  });
  it('contains ChatList', () => {
    const component = shallow(<ChatContainer onEnterText={null} messages={mockMessages} />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<ChatList />'));
  });
  it('contains InputWithButton', () => {
    const component = shallow(<ChatContainer onEnterText={null} messages={mockMessages} />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<InputWithButton />'));
  });
});
