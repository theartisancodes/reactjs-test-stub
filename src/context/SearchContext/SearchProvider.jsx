import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { SearchContext } from './SearchContext';

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
