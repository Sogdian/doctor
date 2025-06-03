import React from 'react';
import './Header.module.less';
import logo from '../../assets/logo.png';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="logo"/>
    </header>
  );
};

