import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { useSearch } from '../../context/SearchContext';

import FrameworksPage from './index';

jest.mock('../../context/SearchContext', () => ({
  useSearch: jest.fn(),
}));

jest.mock('../items', () => [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    icon: <span>React Icon</span>,
  },
  {
    name: 'Vue',
    description: 'The Progressive JavaScript Framework',
    icon: <span>Vue Icon</span>,
  },
]);

describe('FrameworksPage Component', () => {
  it('renders the filtered results when searchText matches', () => {
    useSearch.mockReturnValue({ searchText: 'React' });
    render(<FrameworksPage />);

    const reactHeader = screen.getByText('React');
    const reactDescription = screen.getByText(
      'A JavaScript library for building user interfaces'
    );

    expect(reactHeader).toBeInTheDocument();
    expect(reactDescription).toBeInTheDocument();
    expect(screen.queryByText('Vue')).not.toBeInTheDocument();
  });

  it('renders no results message when searchText does not match', () => {
    useSearch.mockReturnValue({ searchText: 'Angular' });
    render(<FrameworksPage />);

    const noResultsMessage = screen.getByText('No Results in Frameworks');

    expect(noResultsMessage).toBeInTheDocument();
  });

  it('renders all items when searchText is empty', () => {
    useSearch.mockReturnValue({ searchText: '' });
    render(<FrameworksPage />);

    const reactHeader = screen.getByText('React');
    const vueHeader = screen.getByText('Vue');

    expect(reactHeader).toBeInTheDocument();
    expect(vueHeader).toBeInTheDocument();
  });

  it('displays the correct icon for each item', () => {
    useSearch.mockReturnValue({ searchText: '' });
    render(<FrameworksPage />);

    const reactIcon = screen.getByText('React Icon');
    const vueIcon = screen.getByText('Vue Icon');

    expect(reactIcon).toBeInTheDocument();
    expect(vueIcon).toBeInTheDocument();
  });

  it('renders the no-results image when no matches are found', () => {
    useSearch.mockReturnValue({ searchText: 'Angular' });
    render(<FrameworksPage />);

    const notFoundImage = screen.getByAltText('not-found');
    expect(notFoundImage).toBeInTheDocument();
    expect(notFoundImage).toHaveAttribute('src', '/assets/not-found.svg');
  });
});
