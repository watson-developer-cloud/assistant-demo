import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ChatOptionList from './ChatOptionList';

const sandbox = sinon.createSandbox();
const onUserInputSpy = sinon.spy();
const chatOptionStubData = [
  { label: 'Texas', value: 'texas' },
  { label: 'New York', value: 'newyork' },
  { label: 'California', value: 'california' },
];

describe('ChatOptionList', () => {
  // run each test in isolation
  afterEach(() => sandbox.restore());

  it('renders the correct number of ChatOptions', () => {
    const component = shallow(<ChatOptionList
      options={chatOptionStubData}
      onUserInput={onUserInputSpy}
      isLastMessage
    />);
    expect(component.find('ChatOption')).toHaveLength(chatOptionStubData.length);
  });
});
