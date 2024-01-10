import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// Smoke Test
it('renders without crashing', () => {
  render(<BoxList />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Test for Adding a Box
it('allows users to add a box', () => {
  const { getByLabelText, getByText } = render(<BoxList />);
  
  // simulate filling out the form
  const widthInput = getByLabelText('Width');
  fireEvent.change(widthInput, { target: { value: '100' }});
  const heightInput = getByLabelText('Height');
  fireEvent.change(heightInput, { target: { value: '100' }});
  const colorInput = getByLabelText('Color');
  fireEvent.change(colorInput, { target: { value: 'green' }});

  // simulate form submission
  fireEvent.click(getByText('Add Box'));

  // check if the box is in the document
  expect(getByText('x')).toBeInTheDocument();
});

// Test for Removing a Box
it('allows users to remove a box', () => {
  // Add a box first
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);
  fireEvent.change(getByLabelText('Width'), { target: { value: '100' }});
  fireEvent.change(getByLabelText('Height'), { target: { value: '100' }});
  fireEvent.change(getByLabelText('Color'), { target: { value: 'green' }});
  fireEvent.click(getByText('Add Box'));

  // Remove the box
  fireEvent.click(getByText('x'));

  // Check if the box has been removed
  expect(queryByText('x')).not.toBeInTheDocument();
});
