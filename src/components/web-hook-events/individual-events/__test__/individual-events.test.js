import React from 'react';
import { shallow } from 'enzyme';
import { ticketData } from 'test-data/mock.ticket.data';
import IndividualEventOptions from '..';

describe('IndividualEventOptions', () => {
  let component;

  fit('should render without errors', () => {
    component = shallow(<IndividualEventOptions componentEventSelections={ticketData.componentEventSelections} />);
    expect(component).toBeTruthy();
  });
});
