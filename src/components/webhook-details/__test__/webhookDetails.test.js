import React from 'react';
import { render } from 'react-testing-library';
import { build, fake } from 'test-data-bot';
import WebhookDetails from '..';

const webhookBuilder = build('Webhook').fields({
  name: fake(f => f.lorem.word()),
  description: fake(f => f.lorem.words()),
  payloadUrl: fake(f => f.internet.url()),
  secret: fake(f => f.internet.password()),
  sslVerificationEnabled: fake(f => f.random.boolean()),
  allComponentEventsSelected: fake(f => f.random.boolean()),
});

const webhookComponents = {
  edges: [
    {
      webhookComponent: {
        id: 'V2ViaG9va0NvbXBvbmVudDp7IklkIjozfQ==',
        __id: 'V2ViaG9va0NvbXBvbmVudDp7IklkIjozfQ==',
        component: {
          name: 'test',
        },
        webhookComponentEvents: {
          edges: [
            {
              webhookComponentEvent: {
                id: 'V2ViaG9va0NvbXBvbmVudDp7IklkIjozfQ==',
              },
            },
          ],
        },
      },
    },
  ],
};

test('renders correctly', () => {
  const webhookComponentData = webhookBuilder();
  webhookComponentData.webhookComponents = webhookComponents;
  const { container } = render(<WebhookDetails webhook={webhookComponentData} onWebhookChange={() => {}} />);
  expect(container).toBeTruthy();
});
