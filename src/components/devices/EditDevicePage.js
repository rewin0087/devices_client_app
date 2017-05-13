import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/deviceActions';
import DeviceForm from './DeviceForm';

class EditDevicePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: Object.assign({}, props.device)
    };

    this.saveDevice = this.saveDevice.bind(this);
    this.updateDeviceState = this.updateDeviceState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.device.id !== nextProps.device.id) {
      this.setState({ device: Object.assign({}, nextProps.device) })
    }
  }

  updateDeviceState(event) {
    const field = event.target.name;
    const device = this.state.device;
    device[field] = event.target.value;
    return this.setState({ device: device });
  }

  saveDevice(event) {
    event.preventDefault();
    this.props.actions.updateDevice(this.state.device);
  }

  render() {
    return(
      <DeviceForm
        headerTitle={'Edit Device ' + this.state.device.name }
        device={this.state.device}
        onSave={this.saveDevice}
        onChange={this.updateDeviceState} />
    );
  }
}

EditDevicePage.propTypes = {
  actions: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired
};

function getDeviceById(devices, id) {
  let device = devices.find(device => device.id === id);
  return Object.assign({}, device);
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.params.id !== undefined ? parseInt(ownProps.params.id, 10) : 0;
  let device = getDeviceById(state.devices, id);
  return {
    device: device
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDevicePage);


