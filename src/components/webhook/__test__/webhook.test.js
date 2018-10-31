import React from 'react';
import { shallow } from 'enzyme';
import Webhook from '../Webhook';

describe('Webhook Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Webhook />);
  });

  it('renders without error', () => {
    expect(component).toBeTruthy();
  });
});
