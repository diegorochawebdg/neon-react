import './App.scss';

import Axios, { AxiosResponse } from 'axios';
import Footer from 'components/Footer';
import Preloader from 'components/Preloader';
import { setMenuItems } from 'features/menus/menusSlice';
import IMenus from 'interfaces/Menus.interface';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import { RootState } from './reducers';

const Modular = React.lazy(() => import('./views/Modular'));

const App = () => {
  const mobileMenu = useSelector((state: RootState) => state.mobileMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios
      .get(`${process.env.REACT_APP_API_URL}/menus`)
      .then((menuData: AxiosResponse<IMenus[]>) => {
        dispatch(setMenuItems(menuData.data));
      });
  }, [dispatch]);

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
      <div id="content-wrapper" className="main-content-wrapper">
        <Header />
        <Suspense fallback="Loading...">{routes}</Suspense>
        <Footer />
      </div>
      <HeaderMobile />
      <Preloader />
    </div>
  );
};

export default App;
