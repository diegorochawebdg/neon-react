import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';
import Logo from '../Logo';
import HeaderLinks from '../HeaderLinks';

const Header: React.FC = () => {
  const toggleMobileMenu = () => {
    alert('clicked');
  };

  return (
    <div className="header__background-container">
      <header className="header">
        <div className="container-fluid">
          <div className="row header__nav-logo-wrapper">
            <div className="header__logo-wrapper col-md-auto">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <section className="header__nav-wrapper col">
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <HeaderLinks />
                </ul>
              </nav>
            </section>
            <div className="header__mobile-menu-toggle-wrapper">
              <button
                type="button"
                className="header__mobile-menu-toggle"
                onClick={toggleMobileMenu}
              >
                Abrir/fechar menu
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
