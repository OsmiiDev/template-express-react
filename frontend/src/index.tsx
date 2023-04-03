import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {MantineProvider} from '@mantine/core';

import './index.css';
import styles from './index.module.css';

document.documentElement.lang = 'en-US';

/**
 * @description - Main router component
 * @return {React.ReactElement} - The router component
 */
export const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MantineProvider withGlobalStyles withNormalizeCSS> <Index /> </MantineProvider>} path='/' />
        </Routes>
      </BrowserRouter>
    </>
  );
};

/**
 * @description - /: Main page
 * @return {React.ReactElement} The index component
 */
export const Index: React.FC = () => {
  return (
    <div className={styles.main}> Hello react! </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Router />);
