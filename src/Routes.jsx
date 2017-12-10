import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={() => <App path="/" />} />
      <Route exact path="/CV" component={() => <App path="/CV" />} />
      <Route exact path="/Collage" component={() => <App path="/Collage" />} />
      <Route
        exact
        path="/RecordCollection"
        component={() => <App path="/RecordCollection" />}
      />
      <Route
        exact
        path="/Bookmarks"
        component={() => <App path="/Bookmarks" />}
      />
      <Route
        exact
        path="/Projects"
        component={() => <App path="/Projects" />}
      />
    </Switch>
  </HashRouter>
);

export default Routes;

// WEBPACK FOOTER //
// ./src/Routes.jsx
