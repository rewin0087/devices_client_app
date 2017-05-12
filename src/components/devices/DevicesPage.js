import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/deviceActions';
import DeviceList from './DeviceList';

class DevicesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      devices: Object.assign([], this.props.devices)
    }
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    this.setState({devices: nextProps.devices});
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);