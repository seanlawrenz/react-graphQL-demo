import React from 'react';
import { shallow } from 'enzyme';
import { assetData } from 'test-data/mock.asset.data';
import EventSelection from '..';

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
