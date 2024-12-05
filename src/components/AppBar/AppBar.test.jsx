import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import AppBar from './index';

jest.mock('@context/SearchContext', () => ({
  useSearch: jest.fn(() => ({
    setSearchText: jest.fn(),
  })),
}));

jest.mock('@lib/Avatar', () =>
  jest.fn(() => <div data-testid="avatar">Avatar</div>)
);
jest.mock('@lib/Header', () =>
  jest.fn(({ children }) => <header>{children}</header>)
);
jest.mock('@lib/SearchInput', () =>
  jest.fn(({ onSearch }) => (
    <input
      data-testid="search-input"
      type="text"
      placeholder="Search here"
      onChange={(e) => onSearch(e.target.value)}
    />
  ))
);

describe('AppBar Component', () => {
  it('renders the AppBar with Avatar and Header', () => {
    render(
      <MemoryRouter>
        <AppBar imgUrl="test-img-url" userName="Test User" />
      </MemoryRouter>
    );

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('shows SearchInput when location.pathname is "/frameworks"', () => {
    render(
      <MemoryRouter initialEntries={['/frameworks']}>
        <AppBar imgUrl="test-img-url" userName="Test User" />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('hides SearchInput when location.pathname is not "/frameworks"', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <AppBar imgUrl="test-img-url" userName="Test User" />
      </MemoryRouter>
    );

    const searchInput = screen.queryByTestId('search-input');
    expect(searchInput).not.toBeInTheDocument();
  });

  it('passes correct props to Avatar', () => {
    render(
      <MemoryRouter>
        <AppBar imgUrl="test-img-url" userName="Test User" />
      </MemoryRouter>
    );

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });
});
