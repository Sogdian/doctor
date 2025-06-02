import React from 'react';
import styles from './Header.module.less';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Заголовок сайта</h1>
    </header>
  );
};

export default Header; 