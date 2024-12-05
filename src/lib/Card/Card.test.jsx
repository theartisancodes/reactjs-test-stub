import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Card from './index';

describe('Card Component', () => {
  it('renders the Card component with children', () => {
    render(
      <Card>
        <p>Card Content</p>
      </Card>
    );
    const card = screen.getByText('Card Content');
    expect(card).toBeInTheDocument();
  });

  it('applies the default className', () => {
    render(
      <Card>
        <p>Card Content</p>
      </Card>
    );
    const card = screen.getByText('Card Content').parentElement;
    expect(card).toHaveClass('card');
  });

  it('applies a custom className', () => {
    render(
      <Card className="custom-class">
        <p>Card Content</p>
      </Card>
    );
    const card = screen.getByText('Card Content').parentElement;
    expect(card).toHaveClass('custom-class');
  });

  it('applies inline styles passed via the style prop', () => {
    const style = { backgroundColor: 'red', padding: '10px' };
    render(
      <Card style={style}>
        <p>Card Content</p>
      </Card>
    );
    const card = screen.getByText('Card Content').parentElement;
    expect(card).toHaveStyle('background-color: red');
    expect(card).toHaveStyle('padding: 10px');
  });

  it('renders correctly with all props combined', () => {
    const style = { color: 'blue' };
    render(
      <Card className="custom-class" style={style}>
        <p>Card Content</p>
      </Card>
    );
    const card = screen.getByText('Card Content').parentElement;
    expect(card).toHaveClass('card custom-class');
    expect(card).toHaveStyle('color: blue');
  });
});
