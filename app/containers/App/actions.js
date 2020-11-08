import {
  LOG_IN,
  SET_CURRENT_USER,
  REGISTER,
  LOG_OUT,
  SET_LOCAL_STORAGE_TOKEN,
  SET_AUTH_TOKEN,
  GET_ERRORS,
  REGISTERED,
} from './constants';

export function register(payload) {
  return {
    type: REGISTER,
    payload,
  };
}

export function registered() {
  return {
    type: REGISTERED,
  };
}

export function login(userData) {
  return {
    type: LOG_IN,
    userData,
  };
}

export function setCurrentUser(expDate) {
  return {
    type: SET_CURRENT_USER,
    expDate,
  };
}

export function logout() {
  return {
    type: LOG_OUT,
  };
}

export function setLocalStorageToken(token) {
  return {
    type: SET_LOCAL_STORAGE_TOKEN,
    token,
  };
}

export function setAuthToken(token) {
  return {
    type: SET_AUTH_TOKEN,
    token,
  };
}

export function getErrors(error) {
  return {
    type: GET_ERRORS,
    error,
  };
}
