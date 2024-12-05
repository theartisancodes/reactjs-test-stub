import React from 'react';

import { Outlet } from 'react-router-dom';

import { SearchProvider } from '@context/SearchContext';

import Section from '@lib/Section';

import AppBar from '@components/AppBar';
import Navigation from '@components/Navigation';

import styles from './styles.module.scss';

const imgUrl = `${import.meta.env.AVATAR_DISPLAY_URL}300`;
const userName = import.meta.env.USER_NAME;
const RootLayout = () => {
  return (
    <SearchProvider>
      <div className={styles.container}>
        <nav>
          <Navigation />
        </nav>
        <main>
          <Section>
            <AppBar imgUrl={imgUrl} userName={userName} />
            <Outlet />
          </Section>
        </main>
      </div>
    </SearchProvider>
  );
};

export default RootLayout;
