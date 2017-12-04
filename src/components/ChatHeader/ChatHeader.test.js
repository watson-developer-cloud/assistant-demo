import React from 'react';
import { shallow } from 'enzyme';
import ChatHeader from './ChatHeader';

describe('ChatHeader', () => {
  it('renders bot name', () => {
    const component = shallow(<ChatHeader />);
    expect(component.find('div').text()).toEqual('XBankBot');
  });
});
