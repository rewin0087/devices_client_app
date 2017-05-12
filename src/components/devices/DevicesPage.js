import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DeviceList from './DeviceList';

class DevicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: Object.assign([], this.props.devices)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ devices: Object.assign([], nextProps.devices) });
  }

  render() {
    const devices = this.state.devices;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>List of Device</h3>
              </div>
              <div className='panel-body'>
                <DeviceList devices={devices} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DevicesPage.propTypes = {
  devices: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    devices: state.devices
  }
}

export default connect(mapStateToProps)(DevicesPage);