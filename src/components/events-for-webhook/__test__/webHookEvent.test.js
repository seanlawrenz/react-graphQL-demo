import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WebHookEvents from '..';

let wrapper;
configure({ adapter: new Adapter() });

describe('Webhook events', () => {
  beforeEach(() => {
    wrapper = shallow(<WebHookEvents />);
  })

  it('should show hello on "individual events"', () => {
    wrapper.instance()._onChange({ target: { value: 'individual events' } });
    expect(wrapper.instance().state.showHello).toBeTruthy();
  });
});
