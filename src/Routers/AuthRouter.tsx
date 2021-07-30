import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ScrollToTop from "../Components/ScrollToTop"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AuthRouter = () => {
  const token = localStorage.getItem('logtoken');

  return (
    <Fragment>
      <ScrollToTop />
      <Navbar isLoggedIn={token !== null} />
      <Switch>
        {!token && <Route path="/" component={PublicRouter} />}
        {token && <Route path="/" component={PrivateRouter} />}
        <Redirect to={'/'} />
      </Switch>
      <Footer/>
    </Fragment>
  );
};
