import React from 'react';

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchInput from './index';

describe('SearchInput Component', () => {
  it('renders the SearchInput component', () => {
    render(<SearchInput onSearch={jest.fn()} />);
    const input = screen.getByPlaceholderText('Search here');
    expect(input).toBeInTheDocument();
  });

  it('updates the input value when text is entered', () => {
    render(<SearchInput onSearch={jest.fn()} />);
    const input = screen.getByPlaceholderText('Search here');
    fireEvent.change(input, { target: { value: 'Test search' } });
    expect(input).toHaveValue('Test search');
  });

  it('calls the onSearch function with the correct value', () => {
    const mockOnSearch = jest.fn();
    render(<SearchInput onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText('Search here');
    fireEvent.change(input, { target: { value: 'New search text' } });
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('New search text');
  });

  it('renders with default styles', () => {
    render(<SearchInput onSearch={jest.fn()} />);
    const input = screen.getByPlaceholderText('Search here');
    expect(input).toHaveClass('searchInput');
  });
});
