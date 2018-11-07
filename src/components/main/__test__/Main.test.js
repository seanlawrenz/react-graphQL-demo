import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import Main from '../Main';

describe('Main', () => {
  it('should render the webhooks', () => {
    const main = render(<BrowserRouter><Main /></BrowserRouter>);

    main.getByText('Webhooks example');
    expect(main.queryByText).toBeTruthy();
  });
});
