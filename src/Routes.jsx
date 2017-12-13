import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={() => <Home path="/" />} />
    </Switch>
  </HashRouter>
);

export default Routes;

// WEBPACK FOOTER //
// ./src/Routes.jsx
