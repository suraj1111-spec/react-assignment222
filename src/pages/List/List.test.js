/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import List from './List';

describe('List component', () => {
  const employees = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      salary: 50000,
      date: '2023-01-01',
    },
    // Add more employees as needed
  ];
  const handleEdit = jest.fn();
  const handleDelete = jest.fn();



  it('should call handleEdit when the Edit button is clicked', () => {
    const { getAllByText } = render(
      <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
    );

    const editButton = getAllByText('Edit')[0];
    fireEvent.click(editButton);

    expect(handleEdit).toHaveBeenCalledTimes(1);
    expect(handleEdit).toHaveBeenCalledWith(employees[0].id);
  });

  it('should call handleDelete when the Delete button is clicked', () => {
    const { getAllByText } = render(
      <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
    );

    const deleteButton = getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(employees[0].id);
  });
});
