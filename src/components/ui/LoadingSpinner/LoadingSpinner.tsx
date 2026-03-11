import React from 'react';
import styles from './LoadingSpinner.module.css';

export const LoadingSpinner: React.FC<{ size?: 'small' | 'medium' | 'large', fullPage?: boolean }> = ({ 
  size = 'medium',
  fullPage = false
}) => {
  const containerClass = fullPage ? styles.fullPageContainer : styles.container;
  
  return (
    <div className={containerClass} aria-live="polite" aria-busy="true">
      <div className={`${styles.spinner} ${styles[size]}`} />
      <span className={styles.srOnly}>Cargando...</span>
    </div>
  );
};
