import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IndividualEventOptions from '..';

import { ticketData } from '../../../../mock.ticket.data';

configure({ adapter: new Adapter() });
describe('IndividualEventOptions', () => {
  let component;

  it('should render without errors', () => {
    component = shallow(<IndividualEventOptions componentEventSelections={ticketData.componentEventSelections} />);
    expect(component).toBeTruthy();
  });
});
