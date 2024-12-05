import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './index';

describe('Button Component', () => {
  it('renders the button with children', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with all props combined', () => {
    render(
      <Button
        className="custom-class"
        styleType="danger"
        type="reset"
        small
        fullButton
      >
        Combined Props Button
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button--danger');
    expect(button).toHaveClass('button--small');
    expect(button).toHaveClass('button--full');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveAttribute('type', 'reset');
    expect(button).toHaveTextContent('Combined Props Button');
  });
});
