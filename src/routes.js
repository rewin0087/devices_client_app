import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import DevicesPage from './components/devices/DevicesPage';
import DevicePage from './components/devices/DevicePage';
import NewDevicePage from './components/devices/NewDevicePage';
import EditDevicePage from './components/devices/EditDevicePage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={DevicesPage} />
    <Route path="/devices" component={DevicesPage}>
      <Route path="/devices/new" component={NewDevicePage} />
      <Route path="/devices/:id" component={DevicePage} />
      <Route path="/devices/:id/edit" component={EditDevicePage} />
    </Route>
  </Route>
);