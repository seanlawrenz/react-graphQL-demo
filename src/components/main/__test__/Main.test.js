import React from 'react';
import { shallow } from 'enzyme';
import { listWebhookData } from 'test-data/mock.list.data';
import Main from '../Main';

describe('Main', () => {
  let component;
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(listWebhookData));
    component = shallow(<Main />);
  });

  it('renders without error', () => {
    expect(component).toBeTruthy();
  });
});
