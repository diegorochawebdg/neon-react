import './index.scss';

import { toggleMobileMenu } from 'features/mobileMenu/mobileMenuSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import HeaderLinks from '../HeaderLinks';
import Logo from '../Logo';

const Header: React.FC = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const headerEl = useRef<HTMLDivElement>(document.createElement('div'));
  const dispatch = useDispatch();

  const toggleHeaderStick = () => {
    setSticky(window.pageYOffset >= 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleHeaderStick);

    return () => {
      window.removeEventListener('scroll', toggleHeaderStick);
    };
  });

  return (
    <div className="header__background-container">
      <header className={`header ${sticky ? 'is-sticky' : ''}`} ref={headerEl}>
        <div className="container-fluid">
          <div className="row header__nav-logo-wrapper">
            <div className="header__logo-wrapper col-md-auto">
              <NavLink to="/" className="header__logo">
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
                onClick={() => dispatch(toggleMobileMenu())}
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
