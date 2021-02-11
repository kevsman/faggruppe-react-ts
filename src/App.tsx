import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './route/AppRouter';
import { AppStoreProvider } from './context/AppStoreContext';

export default () => {
  return (
    <>
      <AppStoreProvider>
        <AppRouter></AppRouter>
      </AppStoreProvider>
    </>
  );
};
