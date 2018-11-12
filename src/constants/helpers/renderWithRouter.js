import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';

export const renderWithRouter = (ui, container = '', { route = '/', history = createHashHistory({ initialEntries: [route] }) } = {}) => {
  const div = container === '' ? document.createElement('div') : document.createElement(container);
  return {
    ...render(<Router history={history}>{ui}</Router>, { container: div }),
    history,
  };
};
