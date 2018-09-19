import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventSelection from '..';

import { assetData } from '../../../../../mock.asset.data';

configure({ adapter: new Adapter() });
describe('EventSelection component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EventSelection eventSelection={assetData.componentEventSelections[0].eventSelections[0]} />);
  });

  it('should render without errors', () => {
    expect(component).toBeTruthy();
  });

  it('should updated the checked onChange', () => {
    const event = { target: { checked: true } };
    component.instance().onChange(event);
    expect(component.instance().state.eventSelection.selected).toBeTruthy();

    event.target.checked = false;
    component.instance().onChange(event);
    expect(component.instance().state.eventSelection.selected).toBeFalsy();
  });
});
