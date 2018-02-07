import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import DemoToggleButton from './DemoToggleButton';

const sandbox = sinon.createSandbox();
const onClickSpy = sinon.spy();

describe('DemoToggleButton', () => {
  // run each test in isolation
  afterEach(() => sandbox.restore());

  it('contains button', () => {
    const component = shallow(<DemoToggleButton isToggled icon="code" onClick={onClickSpy} />);
    expect(component.find('button')).toHaveLength(1);
  });
  it('contains an Icon', () => {
    const component = shallow(<DemoToggleButton isToggled icon="code" onClick={onClickSpy} />);
    expect(component.find('button').text()).toEqual(expect.stringContaining('<Icon />'));
  });
  it('calls onClick on button click', () => {
    const component = shallow(<DemoToggleButton isToggled icon="code" onClick={onClickSpy} />);
    component.find('button').simulate('click');
    expect(onClickSpy.calledOnce).toEqual(true);
  });
  it('contains toggled css when toggled on', () => {
    const component = shallow(<DemoToggleButton isToggled icon="code" onClick={onClickSpy} />);
    expect(component.find('.demo-toggle-button--toggled')).toHaveLength(1);
  });
  it('doesnt contain toggled css when toggled off', () => {
    const component = shallow(<DemoToggleButton
      isToggled={false}
      icon="code"
      onClick={onClickSpy}
    />);
    expect(component.find('.demo-toggle-button--toggled')).toHaveLength(0);
  });
});
