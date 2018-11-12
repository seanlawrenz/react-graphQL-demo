import React from 'react';
import { renderWithRouter } from 'constants/helpers/renderWithRouter';
import { build, fake, sequence, arrayOf } from 'test-data-bot';
import WebhookList from '../WebhookList';

jest.mock('react-relay');

const webhookBuilder = build('Webhook').fields({
  node: {
    __id: sequence(s => `idll${s}`),
    id: fake(f => f.lorem.word()),
    Name: fake(f => f.lorem.words()),
    CreatedDate: fake(f => f.date.past()),
    ModifiedDate: fake(f => f.date.recent()),
    CreatedByUserUser: {
      FullName: fake(f => f.name.findName()),
    },
    ModifiedByUserUser: {
      FullName: fake(f => f.name.findName()),
    },
  },
});

const webhooksBuilder = build('Webhooks').fields({
  webhooks: arrayOf(webhookBuilder(), 1),
});

test('WebhookList', () => {
  const webhooks = webhooksBuilder();
  renderWithRouter(<WebhookList webhooks={webhooks.webhooks} />);
});
