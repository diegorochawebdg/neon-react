import React, { Suspense } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import { RootState } from './reducers';

const Modular = React.lazy(() => import('./views/Modular'));

const App = () => {
  const mobileMenu = useSelector((state: RootState) => state.mobileMenu);

  const routes = (
    <Switch>
      <Route path="/produtos" render={() => <Modular />} />
      <Route path="/" render={() => <Modular />} />
    </Switch>
  );

  return (
    <div
      className={`header__background-container ${
        mobileMenu.isMobileMenuOpened ? 'is-mobile-menu-opened' : ''
      }`}
    >
      <Header />
      <div id="content-wrapper" className="main-content-wrapper">
        <Suspense fallback="Loading...">{routes}</Suspense>
      </div>
      <HeaderMobile />
    </div>
  );
};

export default App;
