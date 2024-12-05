import { createContext, useContext } from 'react';

export const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};
