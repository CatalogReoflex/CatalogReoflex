import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
      <header>
        <h1 className={s.Header}>Каталог Товаров</h1>
      </header>
  );
};

export default Header;
