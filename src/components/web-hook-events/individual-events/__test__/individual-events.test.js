import React from 'react';
import ReactDOM from 'react-dom';
import IndividualEventOptions from '..';

describe('IndividualEventOptions', () => {
  it('should render without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IndividualEventOptions />, div);
  });
});
