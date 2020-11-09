import axios from 'axios';
import { fromJS } from 'immutable';
import {
  GET_ERRORS,
  SET_AUTH_TOKEN,
  SET_CURRENT_USER,
  SET_LOCAL_STORAGE_TOKEN,
  LOGOUT,
  START_LOADING,
  STOP_LOADING,
} from './constants';

export const initialState = fromJS({
  isAuthenticated: false,
  user: {},
  errors: {},
  loading: false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return state.set('loading', true);
    }
    case STOP_LOADING: {
      return state.set('loading', false);
    }
    case SET_LOCAL_STORAGE_TOKEN: {
      localStorage.setItem('authToken', action.token);
      return state.set('isAuthenticated', true);
    }
    case SET_AUTH_TOKEN: {
      if (action.token) {
        // Apply to every request
        axios.defaults.headers.common.Authorization = action.token;
      } else {
        // Delete Auth Header
        delete axios.defaults.headers.common.Authorization;
      }
      return state;
    }
    case SET_CURRENT_USER: {
      localStorage.setItem('expDate', action.expDate);
      return state.set('isAuthenticated', true).set('expDate', action.expDate);
    }
    case GET_ERRORS: {
      return state.set('errors', action.error);
    }
    case LOGOUT: {
      localStorage.removeItem('authToken');
      localStorage.removeItem('expDate');
      return state.set('isAuthenticated', false);
    }
    default:
      return state;
  }
}

export default globalReducer;
