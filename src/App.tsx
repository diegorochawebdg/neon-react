import React, { Suspense } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';

const Modular = React.lazy(() => import('./views/Modular'));

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" render={() => <Modular />} />
    </Switch>
  );

  return (
    <div className="header__background-container">
      <Header />
      <div id="content-wrapper" className="main-content-wrapper">
        <Suspense fallback="Loading...">{routes}</Suspense>
      </div>
      <HeaderMobile />
    </div>
  );
};

export default App;
