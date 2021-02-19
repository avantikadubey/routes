import 'react-app-polyfill/ie11'; // for IE 11
import 'react-app-polyfill/stable'; // for IE 11

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import 'core-js/es/map';
// import 'core-js/es/set';
// import 'raf/polyfill';

import 'nativeObjectsExtends';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from 'layouts/Admin/Admin';
import Login from 'views/Login/Login';
import ToastComponent from 'views/ToastComponent/ToastComponent';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { Provider } from 'react-redux';
import store from 'store/store';
import AxiosService from 'AxiosService';
// import FirebaseNotification from 'FirebaseNotification';
import { WebSocketContextNotificationProvider } from 'WebSocketContextNotification';

import './i18n';

import 'assets/scss/hcl-bootstrap-theme.scss';
import 'react-virtualized/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <AxiosService>
      <WebSocketContextNotificationProvider>
        <ToastComponent>
          <Router history={hist}>
            <Switch>
              <Route path="/login" render={() => <Login />} />
              <PrivateRoute path="/admin" component={AdminLayout} />
              <Redirect from="/" to="/admin/dashboard" />
            </Switch>
          </Router>
        </ToastComponent>
      </WebSocketContextNotificationProvider>
    </AxiosService>
  </Provider>,
  document.getElementById('root')
);
