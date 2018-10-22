import React from 'react';
import { shallow } from 'enzyme';
import { listWebhookData } from 'test-data/mock.list.data';
import WebhookListDetails from '../WebhookListDetails';

describe('WebhookListDetails Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<WebhookListDetails webhook={listWebhookData} />);
  });

  it('should render without error', () => {
    expect(component).toBeTruthy();
  });
});
