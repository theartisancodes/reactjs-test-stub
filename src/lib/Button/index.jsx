import React from 'react';

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const Button = ({
  children,
  className = '',
  styleType = 'primary',
  type = 'button',
  small = false,
  fullButton = false,
  ...props
}) => (
  <button
    type={type}
    className={`
        ${styles[`button--${styleType}`] || ''}
        ${small ? styles['button--small'] : ''}
        ${fullButton ? styles['button--full'] : ''}
        ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styleType: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'link',
    'onlyText',
    'neutral',
  ]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  small: PropTypes.bool,
  fullButton: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  styleType: 'primary',
  type: 'button',
  small: false,
  fullButton: false,
};
