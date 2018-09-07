import React from 'react';
import ReactDOM from 'react-dom';
import WebHookEvents from '..';

describe('Webhook events', () => {
  it('should render without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WebHookEvents />, div);
  });
});
