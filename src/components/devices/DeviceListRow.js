import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const DeviceListRow = ({device}) => {
  return(
    <tr>
      <td>{device.id}</td>
      <td>{device.device_mac}</td>
      <td>{device.serial_no}</td>
      <td>{device.color}</td>
      <td>{device.name}</td>
      <td>{device.description}</td>
      <td>{device.building}</td>
      <td>{device.level}</td>
      <td>{device.device_threshold}</td>
      <td>
        <div className='btn-group'>
          <Link to={'/devices/' + device.id} className='btn btn-default'>View</Link>
          <Link to={'/devices/' + device.id + '/edit'} className='btn btn-default'>Edit</Link>
        </div>
      </td>
    </tr>
  );
};

DeviceListRow.propTypes = {
  device: PropTypes.object.isRequired
};

export default DeviceListRow;