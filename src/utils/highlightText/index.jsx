import React from 'react';

import styles from './styles.module.scss';

/**
 * Highlights search terms in a given text
 * @param {string} text - The text to search in
 * @param {string} searchTerm - The search term to highlight
 * @returns {JSX.Element} - A React fragment with highlighted terms
 */
export const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className={styles.highlight}>
        {part}
      </span>
    ) : (
      part
    )
  );
};
