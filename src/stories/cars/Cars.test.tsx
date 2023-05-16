import React from 'react';
import { render, screen } from '@testing-library/react';
import VehicleTile from './VehicleTile';
// import VehicleCarousel from './VehicleCarousel'

test('renders a VehicleTile with the selected text', () => {
  render(<VehicleTile label="Sedans" />);

  expect(screen.getByText('Sedans')).toBeInTheDocument();
  expect(screen.findAllByAltText('Sedans Icon')).toBeInTheDocument();
});

// test('renders a VehicleCarousel' () => {
//   render(<VehicleCarousel />)

// })
