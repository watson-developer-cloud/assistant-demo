import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ChatOption from './ChatOption';

const sandbox = sinon.createSandbox();
const onUserInputSpy = sinon.spy();

describe('ChatOption', () => {
  // run each test in isolation
  afterEach(() => sandbox.restore());

  it('renders a button', () => {
    const component = shallow(<ChatOption
      option={{ label: 'Texas', value: 'texas' }}
      onUserInput={onUserInputSpy}
      isSelected={false}
    />);
    expect(component.find('button')).toHaveLength(1);
  });
  it('has the correct label', () => {
    const component = shallow(<ChatOption
      option={{ label: 'Texas', value: 'texas' }}
      onUserInput={onUserInputSpy}
      isSelected={false}
    />);
    expect(component.find('button').text()).toEqual(expect.stringContaining('Texas'));
  });
  it('calls onClick when clicked', () => {
    const component = shallow(<ChatOption
      option={{ label: 'Texas', value: 'texas' }}
      onUserInput={onUserInputSpy}
      isSelected={false}
    />);
    component.find('button').simulate('click');
    expect(onUserInputSpy.calledOnce).toEqual(true);
  });
  it('has selected css class when isSelected is true', () => {
    const component = shallow(<ChatOption
      option={{ label: 'Texas', value: 'texas' }}
      onUserInput={onUserInputSpy}
      isSelected
    />);
    expect(component.find('.chat-option__button--selected')).toHaveLength(1);
  });
  it('doesnt have selected css class when isSelected is false', () => {
    const component = shallow(<ChatOption
      option={{ label: 'Texas', value: 'texas' }}
      onUserInput={onUserInputSpy}
      isSelected={false}
    />);
    expect(component.find('.chat-option__button--selected')).toHaveLength(0);
  });
});
