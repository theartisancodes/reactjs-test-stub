import React from 'react';

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Card = ({ children, className = '', style }) => {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={style}
      data-testid="mock-card"
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Card;
