import React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

test('renders a button with the selected text', () => {
  render(<IconButton label="Sedans" />);

  expect(screen.getByText('Sedans')).toBeInTheDocument();
});
