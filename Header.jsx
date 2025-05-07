
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Каталог Книг</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/create">Добавить</Link>
      </nav>
    </header>
  );
}

export default Header;
