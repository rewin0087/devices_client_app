import * as types from './actionTypes';
import deviceApi from '../apis/deviceApi';

export function loadDevicesSuccess(devices) {
  return { type: types.LOAD_DEVICES_SUCCESS, devices};
}

export function createDeviceSuccess(device) {
  return { type: types.CREATE_DEVICE_SUCCESS, device };
}

export function updateDeviceSuccess(device) {
  return { type: types.UPDATE_DEVICE_SUCCESS, device };
}

export function destroyDeviceSuccess(device) {
  return { type: types.DESTROY_DEVICE_SUCCESS, device };
}

export function getAllDevices() {
  return function(dispatch) {
    return deviceApi.getAllDevices().then(response => {
      dispatch(loadDevicesSuccess(response.devices));
    }).catch(error => {
      throw(error);
    });
  }
}

export function createDevice(device) {
  return function(dispatch) {
    return deviceApi.createDevice(device).then(response => {
      dispatch(createDeviceSuccess(response.device));
      return response.device;
    }).catch(error => {
      throw(error);
    })
  }
}

export function updateDevice(device) {
  return function(dispatch) {
    return deviceApi.updateDevice(device).then(response => {
      dispatch(updateDeviceSuccess(response.device));
      return response.device;
    }).catch(error => {
      throw(error);
    })
  }
}

export function destroyDevice(device) {
  return function(dispatch) {
    return deviceApi.destroyDevice(device).then(response => {
      dispatch(destroyDeviceSuccess(response.device));
      return response.device;
    }).catch(error => {
      throw(error);
    })
  }
}