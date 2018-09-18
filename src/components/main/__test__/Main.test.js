import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '..';

configure({ adapter: new Adapter() });
describe('Main', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Main />);
  });
  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('changes the type on radio click (this is for demo only)', () => {
    component.instance().onTypeChange({ target: { value: 'asset' } });

    expect(component.instance().state.type).toBe('asset');
  });
});
