import React from 'react';
import Main from '../containers/Main';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
