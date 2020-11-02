import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout.js';
import BaseRouter from './routes'

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
// import Alerts from './components/layout/Alerts';

// Alert Options
const alertOptions = {
  timeout: 0,
  position: 'top center',
  type: 'info',
  transition: 'fade',
  containerStyle: {
    zIndex: 100
  }
};


class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Layout>
              <BaseRouter />
            </Layout>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
