import React from 'react';
import { shallow } from 'enzyme';
import { listWebhookData } from 'test-data/mock.list.data';
import WebhookList from '..';

describe('WebhookList Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<WebhookList webhooks={listWebhookData} deleteWebhook={() => {}} />);
  });

  it('should render without error', () => {
    expect(component).toBeTruthy();
  });
});
