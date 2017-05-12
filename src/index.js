import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { getAllDevices } from './actions/deviceActions';
import '../node_modules/toastr/build/toastr.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const store = configureStore();

store.dispatch(getAllDevices());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
