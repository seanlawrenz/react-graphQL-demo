import React from 'react';
import { renderWithRouter } from 'constants/helpers/renderWithRouter';
import NewWebhook from '..';

test('new Webhook', () => {
  const { container } = renderWithRouter(<NewWebhook />);

  expect(container).toBeTruthy();
});
