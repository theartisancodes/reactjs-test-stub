import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from './index';

jest.mock('../Card', () => {
  return jest.fn(({ children, className }) => (
    <div className={className} data-testid="mock-card">
      {children}
    </div>
  ));
});

describe('Header Component', () => {
  it('renders the Header component with children', () => {
    render(
      <Header>
        <h1>Header Content</h1>
      </Header>
    );
    const headerContent = screen.getByText('Header Content');
    expect(headerContent).toBeInTheDocument();
  });

  it('applies the header class from styles.module.scss', () => {
    render(
      <Header>
        <h1>Header Content</h1>
      </Header>
    );
    const card = screen.getByTestId('mock-card');
    expect(card).toHaveClass('header');
  });

  it('passes children to the Card component', () => {
    render(
      <Header>
        <h1>Header Content</h1>
        <p>Additional Content</p>
      </Header>
    );
    const headerContent = screen.getByText('Header Content');
    const additionalContent = screen.getByText('Additional Content');
    expect(headerContent).toBeInTheDocument();
    expect(additionalContent).toBeInTheDocument();
  });
});
