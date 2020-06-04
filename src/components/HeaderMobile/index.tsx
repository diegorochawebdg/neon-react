import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMobile: React.FC = () => {
  return (
    <section className="header__mobile-menu-wrapper">
      <nav className="header__mobile-menu">
        <ul className="header__mobile-nav-list">
          <li className="header__mobile-nav-list-item">
            <NavLink to="/test">Test</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default HeaderMobile;
