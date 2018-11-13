import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import Main from '..';

describe('Main', () => {
  it('should render the webhooks', () => {
    const main = render(
      <MockedProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MockedProvider>,
    );

    main.getByText('Webhooks example');
    expect(main.queryByText).toBeTruthy();
  });
});
