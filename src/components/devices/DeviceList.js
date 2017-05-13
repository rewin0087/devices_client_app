import React from 'react';
import PropTypes from 'prop-types';
import DeviceListRow from './DeviceListRow';

const DeviceList = ({devices}) => {
  return(
    <table className='table table-hovered table-bordered'>
      <thead>
        <tr>
          <th>ID</th>
          <th>device mac</th>
          <th>serial no</th>
          <th>color</th>
          <th>name</th>
          <th>description</th>
          <th>building</th>
          <th>level</th>
          <th>device threshold</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device =>
          <DeviceListRow key={device.id} device={device} />
        )}
      </tbody>
    </table>
  );
};

DeviceList.propTypes = {
  devices: PropTypes.array.isRequired
};

export default DeviceList;