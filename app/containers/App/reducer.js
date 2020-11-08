import axios from 'axios';
import { fromJS } from 'immutable';
import { SET_LOCAL_STORAGE_TOKEN, SET_AUTH_TOKEN, SET_CURRENT_USER, GET_ERRORS } from './constants';

export const initialState = fromJS({
  isAuthenticated: false,
  user: {},
  errors: {},
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default globalReducer;
