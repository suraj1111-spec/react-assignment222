/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './Header';

describe('Header component', () => {
  it('should render the Header component correctly', () => {
    // Render the Header component
    const setIsAdding = jest.fn();
    const { getByText } = render(<Header setIsAdding={setIsAdding} />);

    // Assert that the component renders the expected content
    expect(getByText('React Assignment')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
  });

  it('should call setIsAdding when the Add button is clicked', () => {
    // Render the Header component
    const setIsAdding = jest.fn();
    const { getByText } = render(<Header setIsAdding={setIsAdding} />);

    // Find the Add button and click it
    const addButton = getByText('Add');
    fireEvent.click(addButton);

    // Assert that setIsAdding has been called
    expect(setIsAdding).toHaveBeenCalledTimes(1);
    // You can also assert the arguments passed to setIsAdding if needed
  });
});
