import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useSearch } from '@context/SearchContext';

import items from '@pages/items';

import { highlightText } from '@utils/highlightText';

import styles from './styles.module.scss';

const FrameworksPage = () => {
  const { searchText, setSearchText } = useSearch();

  const location = useLocation();

  useEffect(() => {
    setSearchText('');
  }, [location.pathname, setSearchText]);

  const filteredData = searchText
    ? items?.filter(
        (item) =>
          item?.name?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
          item?.description?.toLowerCase()?.includes(searchText?.toLowerCase())
      )
    : items;

  return (
    <div className={styles.frameworksContainer}>
      {filteredData?.length > 0 ? (
        filteredData?.map((item, index) => (
          <div className={styles.cardContainer} key={index}>
            <div className={styles.card}>
              <div className={styles.headerContainer}>
                <div className={styles.iconContainer}>{item.icon}</div>
                <header>{highlightText(item?.name, searchText)}</header>
              </div>
              <p>{highlightText(item?.description, searchText)}</p>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.notFound}>
          <img src="/assets/not-found.svg" alt="not-found" />
          <label>No Results in Frameworks</label>
          <span>
            No Results for the term <strong>{searchText}</strong> in frameworks.
            You can try another search term similar to this one.
          </span>
        </div>
      )}
    </div>
  );
};

export default FrameworksPage;
