import React from 'react';

import PropTypes from 'prop-types';

export const Icon = ({
  className = '',
  viewBox = '0 0 23 23',
  title,
  size = 16,
  role = 'svg',
  fill = 'currentColor',
  name,
  alt,
  children,
  ...props
}) => (
  <svg
    className={`icon ${className}`}
    width={size}
    height={size}
    viewBox={viewBox}
    role={role}
    fill={fill}
    name={name}
    alt={alt}
    {...props}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  viewBox: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.number,
  role: PropTypes.string,
  fill: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node.isRequired,
};
