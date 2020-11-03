import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/accounts/Login';
import Index from './pages/Index';
import Explore from './pages/Explore';
import Home from './pages/Home';
import DashboardIndex from './pages/dashboard/Index';
import Profile from './pages/dashboard/Profile';
import PrivateRoute from './common/PrivateRoute';
import Signup from './components/accounts/Signup';

const BaseRouter = () => (
    <Switch>
      <Route path='/' exact component={Index} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/explore' component={Explore} />
      <Route path='/home' component={Home} />

      {/*  */}
      <PrivateRoute path='/dashboard' exact component={DashboardIndex} />
      <PrivateRoute path='/profile' exact component={Profile} />
    </Switch>
  );
export default BaseRouter;