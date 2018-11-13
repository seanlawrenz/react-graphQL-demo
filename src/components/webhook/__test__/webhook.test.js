import React from 'react';
import { renderWithRouter } from 'constants/helpers/renderWithRouter';
import { MockedProvider } from 'react-apollo/test-utils';
import Webhook from '..';

const mockParams = {
  params: {
    _uri: 'fjkslfsjl',
  },
};

test('Webhook', () => {
  const { container } = renderWithRouter(
    <MockedProvider>
      <Webhook match={mockParams} />
    </MockedProvider>,
  );

  expect(container).toBeTruthy();
});
