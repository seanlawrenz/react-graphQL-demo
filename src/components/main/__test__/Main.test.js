import React from 'react';
import { shallow } from 'enzyme';
import { ticketData } from 'test-data/mock.ticket.data';
import Main from '..';

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

  it('fetches the data', () => {
    fetch.mockResponse(JSON.stringify(ticketData));
    expect(fetch).toHaveBeenCalled();
  });
});
