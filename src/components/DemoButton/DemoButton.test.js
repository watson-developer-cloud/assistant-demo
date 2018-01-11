import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import DemoButton from './DemoButton';

const sandbox = sinon.createSandbox();
const onClickSpy = sinon.spy();

describe('DemoButton', () => {
  // run each test in isolation
  afterEach(() => sandbox.restore());

  it('contains button', () => {
    const component = shallow(<DemoButton isToggled icon="code" onClick={onClickSpy} />);
    expect(component.find('button')).toHaveLength(1);
  });
  it('contains an Icon', () => {
    const component = shallow(<DemoButton isToggled icon="code" onClick={onClickSpy} />);
    expect(component.find('button').text()).toEqual(expect.stringContaining('<Icon />'));
  });
  it('calls onClick on button click', () => {
    const component = shallow(<DemoButton isToggled icon="code" onClick={onClickSpy} />);
    component.find('button').simulate('click');
    expect(onClickSpy.calledOnce).toEqual(true);
  });
});
