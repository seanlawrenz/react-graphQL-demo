import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

describe('Main', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Main />);
  });

  it('renders without error', () => {
    expect(component).toBeTruthy();
  });
});

