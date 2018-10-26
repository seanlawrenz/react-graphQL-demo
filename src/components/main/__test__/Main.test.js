import React from 'react';
import { shallow } from 'enzyme';
// import { render } from 'react-testing-library';
import Main from '../Main';

describe('Main', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Main />);
  });

  it('renders without error', () => {
    expect(component).toBeTruthy();
  });

  test('rendering', () => {
    expect(component).toMatchSnapshot();
  });
});
