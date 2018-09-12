import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WebHookEvents from '..';

configure({ adapter: new Adapter() });
describe('Webhook events', () => {
  let component;
  beforeEach(() => {
    component = shallow(<WebHookEvents />);
  });

  it('should show hello on "individual events"', () => {
    component.instance().onChange({ target: { value: 'individual events' } });
    expect(component.instance().state.showHello).toBeTruthy();
  });

  it('should not show hello on other values', () => {
    component.instance().onChange({ target: { value: 'push' } });
    expect(component.instance().state.showHello).toBeFalsy();
  });
});
