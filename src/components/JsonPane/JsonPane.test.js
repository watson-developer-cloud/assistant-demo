import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import JsonPane from './JsonPane';

const sandbox = sinon.createSandbox();
const json = JSON.stringify({
  test: 'hello',
});

describe('JsonPane', () => {
  // run each test in isolation
  afterEach(() => sandbox.restore());

  it('contains JsonLinkInline', () => {
    const component = shallow(<JsonPane isVisible json={json} />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<JsonLinkInline />'));
  });
  it('doesnt have hidden css class when isVisible is true', () => {
    const component = shallow(<JsonPane isVisible json={json} />);
    expect(component.find('.json-pane--hidden')).toHaveLength(0);
  });
  it('has hidden css class when isVisible is false', () => {
    const component = shallow(<JsonPane isVisible={false} json={json} />);
    expect(component.find('.json-pane--hidden')).toHaveLength(1);
  });
});
