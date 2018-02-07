import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from './App';
import { mockSidebarJson } from './__mocks__/testData';

const sandbox = sinon.createSandbox();

describe('App', () => {
  // run tests in isolation
  afterEach(() => sandbox.restore());

  it('contains SelectionSidebar', () => {
    const component = shallow(<App />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<SelectionSidebar />'));
  });
  it('contains ChatContainer', () => {
    const component = shallow(<App />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<ChatContainer />'));
  });
  it('contains OptionsSidebar', () => {
    const component = shallow(<App />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<OptionsSidebar />'));
  });
  // it('updateChatList calls setState', () => {
  //   const setState = sandbox.spy(React.Component.prototype, 'setState');

  //   const component = shallow(<App />);
  //   component.instance().updateChatList(mockBotChatMessage);
  //   expect(setState.calledTwice).toBe(true);
  //   // expect(scrollChatListToBottom.calledTwice).toBe(true);
  // });
  it('updateOptionsSidebar calls setState', () => {
    const setState = sandbox.spy(React.Component.prototype, 'setState');
    const component = shallow(<App />);
    component.instance().updateOptionsSidebar(mockSidebarJson);
    expect(setState.calledTwice).toBe(true);
  });
  it('updateConversationContext calls setState', () => {
    const setState = sandbox.spy(React.Component.prototype, 'setState');
    const component = shallow(<App />);
    component.instance().updateConversationContext(mockSidebarJson);
    expect(setState.calledTwice).toBe(true);
  });
});
