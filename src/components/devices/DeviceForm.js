import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

class DeviceForm extends React.Component {
  render() {
    return(
      <div className='container'>
        <form>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>{this.props.headerTitle}</h3>
            </div>
            <div className='panel-body'>
              <div className='form-group'>
                <div className='row'>
                  <div className='col-md-4'>
                    <strong>Device mac:</strong>
                  </div>
                  <div className='col-md-8'>
                    <input
                      type='text'
                      name='device_mac'
                      onChange={this.props.onChange}
                      placeholder='device mac'
                      value={this.props.device.device_mac}
                      className='form-control' />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div className='row'>
                  <div className='col-md-4'>
                    <strong>Serial no:</strong>
                  </div>
                  <div className='col-md-8'>
                    <input
                      type='text'
                      name='serial_no'
                      onChange={this.props.onChange}
                      placeholder='Serial no'
                      value={this.props.device.serial_no}
                      className='form-control' />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div className='row'>
                  <div className='col-md-4'>
                    <strong>Color:</strong>
                  </div>
                  <div className='col-md-8'>
                    <input
                      type='text'
                      name='color'
                      onChange={this.props.onChange}
                      placeholder='Color'
                      value={this.props.device.color}
                      className='form-control' />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div className='row'>
                  <div className='col-md-4'>
                    <strong>Name:</strong>
                  </div>
                  <div className='col-md-8'>
                    <input
                      type='text'
                      name='name'
                      onChange={this.props.onChange}
                      placeholder='Name'
                      value={this.props.device.name}
                      className='form-control' />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div className='row'>
                  <div className='col-md-4'>
                    <strong>Description:</strong>
                  </div>
                  <div className='col-md-8'>
                    <textarea
                      type='text'
                      name='description'
                      onChange={this.props.onChange}
                      placeholder='Description'
                      value={this.props.device.description}
                      className='form-control' ></textarea>
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div className='row'>
                  <div className='col-md-4'>
                    <strong>Building:</strong>
                  </div>
                  <div className='col-md-8'>
                    <input
                      type='text'
                      name='building'
                      onChange={this.props.onChange}
                      placeholder='Building'
                      value={this.props.device.building}
                      className='form-control' />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div className='row'>
                  <div className='col-md-4'>
                    <strong>Level:</strong>
                  </div>
                  <div className='col-md-8'>
                    <input
                      type='text'
                      name='level'
                      onChange={this.props.onChange}
                      placeholder='Level'
                      value={this.props.device.device_threshold}
                      className='form-control' />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div className='row'>
                  <div className='col-md-4'>
                    <strong>Devie threshold:</strong>
                  </div>
                  <div className='col-md-8'>
                    <input
                      type='number'
                      name='device_threshold'
                      onChange={this.props.onChange}
                      placeholder='Device threshold'
                      value={this.props.device.device_threshold}
                      className='form-control' />
                  </div>
                </div>
              </div>

            </div>
            <div className='panel-footer'>
              <div className='row'>
                <div className='col-md-12'>
                  <input
                    type='submit'
                    value='Save'
                    className='btn btn-primary btn-block'
                    onClick={this.props.onSave} />
                  <Link to='/devices' className='btn btn-default btn-block'> Cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

DeviceForm.propTypes = {
  device: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  headerTitle: PropTypes.string.isRequired
};

export default DeviceForm;