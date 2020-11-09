import {
  LOG_IN,
  SET_CURRENT_USER,
  SET_LOCAL_STORAGE_TOKEN,
  SET_AUTH_TOKEN,
  GET_ERRORS,
  LOGOUT,
  START_LOADING,
  STOP_LOADING,
} from './constants';

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
    type: LOGOUT,
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

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function stopLoading() {
  return {
    type: STOP_LOADING,
  };
}
