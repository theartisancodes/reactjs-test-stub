import React from 'react';

import { useRoutes } from 'react-router-dom';

import FrameworksPage from '@pages/FrameworksPage';
import HomePage from '@pages/HomePage';
import ModelerPage from '@pages/ModelerPage';

import RootLayout from './RootLayout';

const AppRoutes = () =>
  useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'modeler',
          element: <ModelerPage />,
        },
        {
          path: 'frameworks',
          element: <FrameworksPage />,
        },
      ],
    },
  ]);

export default AppRoutes;
