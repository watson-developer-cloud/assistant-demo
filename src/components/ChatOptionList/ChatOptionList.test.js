import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ChatOptionList from './ChatOptionList';

const sandbox = sinon.createSandbox();
const onUserInputSpy = sinon.spy();
const chatOptionStubData = [
  { label: 'Texas', value: { input: { text: 'texas' } } },
  { label: 'NYC', value: { input: { text: 'nyc' } } },
  { label: 'Chicago', value: { input: { text: 'chicago' } } },
];

describe('ChatOptionList', () => {
  // run each test in isolation
  afterEach(() => sandbox.restore());

  it('renders the correct number of ChatOptions', () => {
    const component = shallow(<ChatOptionList
      type="button"
      options={chatOptionStubData}
      onUserInput={onUserInputSpy}
      isLastMessage
    />);
    expect(component.find('ChatOption')).toHaveLength(chatOptionStubData.length);
  });
});
