import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function deviceReducer(state = initialState.devices, action) {
  switch(action.type) {
    case types.LOAD_DEVICES_SUCCESS:
      return Object.assign([], state, action.devices);

    case types.CREATE_DEVICE_SUCCESS:
      browserHistory.push(`/devices/${action.device.i}`)
      return [
        ...state.filter(device => device.id !== action.device.id),
        Object.assign({}, action.device)
      ];

    case types.UPDATE_DEVICE_SUCCESS:
      browserHistory.push(`/devices/${action.device.i}`)
      return [
        ...state.filter(device => device.id !== action.device.id),
        Object.assign({}, action.device)
      ];

    case types.DESTROY_DEVICE_SUCCESS:
      const newState = Object.assign([], state);
      const deviceIndexToRemove = state.findIndex(device => {
        return device.id === action.device.id
      });

      newState.splice(deviceIndexToRemove, 1);
      browserHistory.push('/devices');
      return newState;

    default:
      return state;
  }
}