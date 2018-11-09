import React from 'react';
import { renderWithRouter } from 'constants/helpers/renderWithRouter';
import Webhook from '../Webhook';

const mockParams = {
  params: {
    _uri: 'fjkslfsjl',
  },
};

test('Webhook', () => {
  const { container } = renderWithRouter(<Webhook match={mockParams} />);

  expect(container).toBeTruthy();
});
