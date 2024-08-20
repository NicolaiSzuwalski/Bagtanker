import React from 'react';
import styles from './MainWrapper.module.scss';

export const MainWrapper = ({ children }) => {
  return (
    <div className={styles.MainWrapper}>
      {children}
    </div>
  );
};