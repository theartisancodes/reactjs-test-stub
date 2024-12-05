import React, { useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { Button } from '@lib/Button';
import { FrameworkIcon, HomeIcon, ModelerIcon } from '@lib/Icons';

import styles from './styles.module.scss';

const IconFill = '#FFFFFF';

const Navigation = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleActive = (path) => {
    setActivePath(path);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon fill={IconFill} size={20} /> },
    {
      path: '/modeler',
      label: 'Modeler',
      icon: <ModelerIcon fill={IconFill} size={24} className={styles.icon} />,
    },
    {
      path: '/frameworks',
      label: 'Frameworks',
      icon: <FrameworkIcon fill={IconFill} size={24} />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => handleActive(item.path)}
            style={{ textDecoration: 'none' }}
          >
            <Button
              fullButton
              styleType={activePath === item.path ? 'primary' : 'onlyText'}
            >
              {item.icon}
              {item.label}
            </Button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
