/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Add from './Add';

describe('Add component', () => {
  // it('should render Add component correctly', () => {
  //   const mockSetIsAdding = jest.fn();
  //   const { getByLabelText, getByText } = render(<Add setIsAdding={mockSetIsAdding} />);
  
  //   expect(getByLabelText('First Name')).toBeInTheDocument();
  //   expect(getByLabelText('Last Name')).toBeInTheDocument();
  //   expect(getByLabelText('Email')).toBeInTheDocument();
  //   expect(getByLabelText('Salary ($)')).toBeInTheDocument();
  //   expect(getByLabelText('Date')).toBeInTheDocument();
  //   expect(getByText('Add')).toBeInTheDocument();
  //   expect(getByText('Cancel')).toBeInTheDocument();
  // });

  it('should call handleAdd when the Add button is clicked with valid input', () => {
    const mockSetIsAdding = jest.fn();
    const mockSetEmployees = jest.fn();
    const { getByText, getByLabelText } = render(
      <Add employees={[]} setIsAdding={mockSetIsAdding} setEmployees={mockSetEmployees} />
    );
    const addButton = getByText('Add');
  
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Salary ($)'), { target: { value: '50000' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2023-01-01' } });
  
    fireEvent.click(addButton);
  
    expect(mockSetIsAdding).toHaveBeenCalledWith(false);
    expect(mockSetEmployees).toHaveBeenCalledWith([
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        salary: '50000',
        date: '2023-01-01'
      }
    ]);
  });

  it('should not call handleAdd when the Add button is clicked with missing input', () => {
    const mockSetIsAdding = jest.fn();
    const mockSetEmployees = jest.fn();
    const { getByText } = render(
      <Add employees={[]} setIsAdding={mockSetIsAdding} setEmployees={mockSetEmployees} />
    );
    const addButton = getByText('Add');
  
    fireEvent.click(addButton);
  
    expect(mockSetIsAdding).not.toHaveBeenCalled();
    expect(mockSetEmployees).not.toHaveBeenCalled();
  });


});
