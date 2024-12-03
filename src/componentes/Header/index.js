import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className="header center">
        <picture>
          <img src="./assets/logo.png" alt="logo livraria" />
        </picture>

        <nav>
          <ul>
            <li>
              <a href="#produtos">Produtos</a>
            </li>

            <li>
              <a href="#sobre">Sobre</a>
            </li>

            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
