import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const handleChange = (event) => {
    setSearchText(event?.target?.value);
    if (onSearch) {
      onSearch(event?.target?.value);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        value={searchText}
        onChange={handleChange}
        placeholder="Search here"
      />
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
