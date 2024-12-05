import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Avatar from './index';

describe('Avatar Component', () => {
  const defaultProps = {
    altText: 'User Avatar',
    imgUrl: 'https://example.com/avatar.jpg',
    defaultText: 'U',
    onClick: jest.fn(),
    height: 32,
    width: 32,
  };

  it('should render an image when `imgUrl` is provided', () => {
    render(<Avatar {...defaultProps} />);
    const image = screen.getByRole('img', { name: /user avatar/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', defaultProps.imgUrl);
    expect(image).toHaveStyle({
      height: `${defaultProps.height}px`,
      width: `${defaultProps.width}px`,
    });
  });

  it('should call `onClick` when the image is clicked', () => {
    render(<Avatar {...defaultProps} />);
    const image = screen.getByRole('img');
    fireEvent.click(image);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should show placeholder with default text when `imgUrl` fails to load', () => {
    render(<Avatar {...defaultProps} />);
    const image = screen.getByRole('img');
    fireEvent.error(image);
    const placeholder = screen.getByText(defaultProps.defaultText);
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveStyle({
      fontSize: `${defaultProps.width / 2}px`,
    });
  });

  it('should render placeholder when `imgUrl` is not provided', () => {
    const props = { ...defaultProps, imgUrl: '' };
    render(<Avatar {...props} />);
    const placeholder = screen.getByText(props.defaultText);
    expect(placeholder).toBeInTheDocument();
  });

  it('should apply custom class names', () => {
    const customClass = 'custom-avatar-class';
    render(<Avatar {...defaultProps} className={customClass} />);
    const image = screen.getByRole('img');
    expect(image).toHaveClass(customClass);
  });

  it('should handle alt text correctly', () => {
    render(<Avatar {...defaultProps} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'User Avatar');
  });

  it('should render placeholder with correct styles', () => {
    const props = { ...defaultProps, imgUrl: '' };
    render(<Avatar {...props} />);
    const placeholder = screen.getByText(props.defaultText);
    expect(placeholder.parentElement).toHaveStyle({
      width: `${props.width}px`,
      height: `${props.height}px`,
    });
  });
});
