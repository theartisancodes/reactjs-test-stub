import React from 'react';

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { useSearch } from '@context/SearchContext';

import Avatar from '@lib/Avatar';
import Header from '@lib/Header';
import SearchInput from '@lib/SearchInput';

import styles from './styles.module.scss';

const AppBar = ({ imgUrl, userName }) => {
  const { setSearchText } = useSearch();
  const location = useLocation();

  const handleSearch = (value) => {
    setSearchText(value);
  };
  const mustShowSearchInput = location.pathname === `/frameworks`;

  return (
    <Header className={styles.header}>
      {mustShowSearchInput && <SearchInput onSearch={handleSearch} />}
      <Avatar
        imgUrl={imgUrl}
        altText="User Avatar"
        defaultText={userName}
        height={40}
        width={40}
      />
    </Header>
  );
};

AppBar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default AppBar;
