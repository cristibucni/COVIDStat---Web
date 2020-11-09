import React from 'react';

export const LOG_IN = 'LOG_IN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_LOCAL_STORAGE_TOKEN = 'SET_LOCAL_STORAGE_TOKEN';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const GET_ERRORS = 'GET_ERRORS';
export const LOGOUT = 'LOGOUT';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const AuthContext = React.createContext('');
