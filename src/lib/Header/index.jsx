import React from 'react';

import PropTypes from 'prop-types';

import Card from '@lib/Card';

import styles from './styles.module.scss';

const Header = ({ children }) => {
  return <Card className={styles.header}>{children}</Card>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
