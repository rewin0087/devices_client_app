import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/deviceActions';
import {Link} from 'react-router';

class DevicePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: Object.assign({}, this.props.device)
    }

    this.destroyDevice = this.destroyDevice.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.device.id !== nextProps.device.id) {
      this.setState({ device: Object.assign({}, nextProps.device) })
    }
  }

  destroyDevice(event) {
    this.props.actions.destroyDevice(this.state.device);
  }

  render() {
    const device = this.state.device;
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>{device.name}</h3>
              </div>
              <div className='panel-body'>
                <div className='container'>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>ID:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.id}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>Device mac:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.device_mac}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>Serial no:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.serial_no}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>Color:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.color}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>Name:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.name}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>Description:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.description}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>Building:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.building}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>Level:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.level}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                      <strong>Device Threshold:</strong>
                    </div>
                    <div className='col-md-8'>
                      <p>{device.device_threshold}</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className='panel-footer'>
                <div className='row'>
                  <div className='col-md-12'>
                    <Link to={'/devices/'} className='btn btn-default btn-block'> All Devices</Link>
                    <Link to={'/devices/' + device.id + '/edit'} className='btn btn-default btn-block'> Edit</Link>
                    <button onClick={this.destroyDevice} className='btn btn-danger btn-block'>Destroy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DevicePage.propTypes = {
  device: PropTypes.object.isRequired
};

function getDeviceById(devices, id) {
  let device = devices.find(device => device.id === id)
  return Object.assign({}, device);
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.params.id !== undefined ? parseInt(ownProps.params.id, 10) : 0
  let device = getDeviceById(state.devices, id)
  return {
    device: device
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicePage);
