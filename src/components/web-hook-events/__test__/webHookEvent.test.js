import React from 'react';
import { shallow } from 'enzyme';
import WebHookEvents from '..';

describe('Webhook events', () => {
  let component;
  beforeEach(() => {
    component = shallow(<WebHookEvents />);
  });

  it('should show the individual events component on "individual events"', () => {
    component.instance().onChange({ target: { value: 'individual events' } });
    expect(component.instance().state.showIndividualEventOptions).toBeTruthy();
  });

  it('should not the individual events component on other values', () => {
    component.instance().onChange({ target: { value: 'push' } });
    expect(component.instance().state.showIndividualEventOptions).toBeFalsy();
  });
});
