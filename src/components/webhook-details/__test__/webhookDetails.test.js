import React from 'react';
import { render } from 'react-testing-library';
import { build, fake } from 'test-data-bot';
import { WebhookDetails } from '..';

const webhookBuilder = build('Webhook').fields({
  Name: fake(f => f.lorem.word()),
  Description: fake(f => f.lorem.words()),
  PayloadUrl: fake(f => f.internet.url()),
  Secret: fake(f => f.internet.password()),
  SslVerificationEnabled: fake(f => f.random.boolean()),
  AllComponentEventsSelected: fake(f => f.random.boolean()),
});

const webhookComponents = {
  edges: [{
    webhookComponent: {
      id: 'V2ViaG9va0NvbXBvbmVudDp7IklkIjozfQ==',
      __id: 'V2ViaG9va0NvbXBvbmVudDp7IklkIjozfQ==',
      Component: {
        Name: 'test',
      },
      webhookComponentEvents: {
        edges: [{
          webhookComponentEvent: {
            id: 'V2ViaG9va0NvbXBvbmVudDp7IklkIjozfQ==',
          },
        }],
      },
    },
  }],
};

test('renders correctly', () => {
  const webhookComponentData = webhookBuilder();
  webhookComponentData.webhookComponents = webhookComponents;
  webhookComponentData.AllComponentEventsSelected = false;
  const { container } = render(<WebhookDetails webhook={webhookComponentData} onWebhookChange={() => {}} />);
  expect(container).toBeTruthy();
});
