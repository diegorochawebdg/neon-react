import React from 'react';
import HeaderLinks from 'components/HeaderLinks';

const HeaderMobile: React.FC = () => {
  return (
    <section className="header__mobile-menu-wrapper">
      <nav className="header__mobile-menu">
        <ul className="header__mobile-nav-list">
          <HeaderLinks linkClass="header__mobile-nav-list-item" />
        </ul>
      </nav>
    </section>
  );
};

export default HeaderMobile;
