import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={() => <App path="/" />} />
      <Route exact path="/CV" component={() => <App path="/CV" />} />
      <Route exact path="/Collage" component={() => <App path="/Collage" />} />
    </Switch>
  </HashRouter>
);

export default Routes;

// WEBPACK FOOTER //
// ./src/Routes.jsx
