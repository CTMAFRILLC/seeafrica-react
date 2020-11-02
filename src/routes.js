import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/accounts/Login';
import Index from './pages/Index';
import DashboardIndex from './pages/dashboard/Index';
import PrivateRoute from './common/PrivateRoute';
import Signup from './components/accounts/Signup';

const BaseRouter = () => (
    <Switch>
      <Route path='/' exact component={Index} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />


      <PrivateRoute path='/dashboard' exact component={DashboardIndex} />
    </Switch>
  );
export default BaseRouter;