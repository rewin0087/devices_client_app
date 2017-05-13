import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/deviceActions';
import DeviceForm from './DeviceForm';

class NewDevicePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: {
        device_mac: '',
        serial_no: '',
        color: '',
        name: '',
        description: '',
        building: '',
        level: '',
        device_threshold: 0
      }
    };

    this.saveDevice = this.saveDevice.bind(this);
    this.updateDeviceState = this.updateDeviceState.bind(this);
  }

  updateDeviceState(event) {
    const field = event.target.name;
    const device = this.state.device;
    device[field] = event.target.value;
    return this.setState({ device: device })
  }

  saveDevice(event) {
    event.preventDefault();
    this.props.actions.createDevice(this.state.device);
  }

  render() {
    return(
      <DeviceForm
        headerTitle='New Device'
        device={this.state.device}
        onSave={this.saveDevice}
        onChange={this.updateDeviceState} />
    );
  }
}

NewDevicePage.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return { device: Object.assign({}, state.device) }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDevicePage);





