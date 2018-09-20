import React from 'react';
import { shallow } from 'enzyme';
import { listWebhookData } from 'test-data/mock.list.data';
import Main from '..';

describe('Main', () => {
  let component;
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(listWebhookData));
    component = shallow(<Main />);
  });

  it('renders without error', () => {
    expect(component).toBeTruthy();
  });

  it('changes the type on radio click (this is for demo only)', () => {
    component.instance().onTypeChange({ target: { value: 'asset' } });

    expect(component.instance().state.type).toBe('asset');
  });

  it('fetches the data', () => {
    expect(fetch).toHaveBeenCalled();
  });
});
