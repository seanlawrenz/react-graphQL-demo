import React from 'react';
import { renderWithRouter } from 'constants/helpers/renderWithRouter';
import { build, fake, sequence, arrayOf } from 'test-data-bot';
import { MockedProvider } from 'react-apollo/test-utils';
import WebhookList from '..';

jest.mock('react-relay');

const webhookBuilder = build('Webhook').fields({
  node: {
    __id: sequence(s => `idll${s}`),
    id: fake(f => f.lorem.word()),
    name: fake(f => f.lorem.words()),
    createdDate: fake(f => f.date.past()),
    modifiedDate: fake(f => f.date.recent()),
    createdByUser: {
      fullName: fake(f => f.name.findName()),
    },
    modifiedByUser: {
      fullName: fake(f => f.name.findName()),
    },
  },
});

const webhooksBuilder = build('Webhooks').fields({
  edges: arrayOf(webhookBuilder(), 1),
});

test('WebhookList', () => {
  const webhooks = webhooksBuilder();
  renderWithRouter(
    <MockedProvider>
      <WebhookList webhooks={webhooks} />
    </MockedProvider>,
  );
});
