import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';

export default () =>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/register" component={Register} exact />
    <Route path="/login" component={Login} exact />
    <Route path="*" component={PageNotFound} />
  </Switch>