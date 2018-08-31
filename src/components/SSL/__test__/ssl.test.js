import React from 'react';
import ReactDOM from 'react-dom';
import SSL from '..';

describe('Payload', () => {
  it('should render without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SSL />, div);
  })
});