import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';

import Home from './Home';

// Mocking the useSelector hook
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Home component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        users: [
          {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            salary: 50000,
            date: '2023-01-01',
          },
          // Add more users as needed
        ],
      })
    );
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should render the Home component correctly', async () => {
    render(<Home />);
  });


});
