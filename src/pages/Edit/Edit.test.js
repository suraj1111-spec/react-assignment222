/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line for toHaveBeenCalled and toBeInTheDocument

import Edit from './Edit';

describe('Edit component', () => {
  const employees = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      salary: '50000',
      date: '2023-01-01'
    },
    // Add more employees as needed
  ];
  const selectedEmployee = employees[0];
  const setEmployees = jest.fn();
  const setIsEditing = jest.fn();

  it('should render Edit component correctly', () => {
    const { getByLabelText, getByText } = render(
      <Edit
        employees={employees}
        selectedEmployee={selectedEmployee}
        setEmployees={setEmployees}
        setIsEditing={setIsEditing}
      />
    );

    expect(getByLabelText('First Name')).toBeInTheDocument();
    expect(getByLabelText('Last Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Salary (INR)')).toBeInTheDocument();
    expect(getByLabelText('Date')).toBeInTheDocument();
    expect(getByText('Update')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });

  it('should call handleUpdate when the Update button is clicked with valid input', () => {
    const { getByText, getByLabelText } = render(
      <Edit
        employees={employees}
        selectedEmployee={selectedEmployee}
        setEmployees={setEmployees}
        setIsEditing={setIsEditing}
      />
    );
    const updateButton = getByText('Update');

    fireEvent.change(getByLabelText('First Name'), { target: { value: 'Jane' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Smith' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'jane@example.com' } });
    fireEvent.change(getByLabelText('Salary (INR)'), { target: { value: '60000' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2023-02-01' } });

    fireEvent.click(updateButton);

    expect(setIsEditing).toHaveBeenCalledWith(false);
    expect(setEmployees).toHaveBeenCalledWith([
      {
        id: 1,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        salary: '60000',
        date: '2023-02-01'
      }
      // Check the remaining employees to ensure they are not modified
    ]);
  });


});
