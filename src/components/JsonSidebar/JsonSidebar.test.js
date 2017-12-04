import React from 'react';
import { shallow } from 'enzyme';
import JsonSidebar from './JsonSidebar';

const mockJson = {
  message: 'test',
};

describe('JsonSidebar', () => {
  it('renders json widget', () => {
    const component = shallow(<JsonSidebar json={JSON.stringify(mockJson)} />);
    expect(component.find('div').text()).toEqual('<JsonLinkInline />');
  });
});
