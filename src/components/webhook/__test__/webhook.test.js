import React from 'react';
import { renderWithRouter } from 'constants/helpers/renderWithRouter';
import Webhook from '..';

const mockParams = {
  params: {
    _uri: 'fjkslfsjl',
  },
};

test('Webhook', () => {
  const { container } = renderWithRouter(<Webhook match={mockParams} />);

  expect(container).toBeTruthy();
});
