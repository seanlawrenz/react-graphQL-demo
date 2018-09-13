import React from 'react';
import ReactDom from 'react-dom';
import NameAndDescription from '..';

const mockProps = {
  name: 'Test name',
  description: 'Simple description',
};

describe('NameAndDescription', () => {
  it('renders without error', () => {
    const div = document.createElement('div');
    ReactDom.render(<NameAndDescription name={mockProps.name} description={mockProps.description} />, div);
  });
});
