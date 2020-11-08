import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN, REGISTER } from './constants';
import { setCurrentUser, setLocalStorageToken, getErrors, registered } from './actions';
import apiURL from '../../utils/apiURL';

export function* attemptLogin(action) {
  try {
    const response = yield call(axios.post, `${apiURL}/Authentication`, action.userData);
    const token = response.data.authToken;
    // Set current user
    yield put(setLocalStorageToken(token));
    yield put(setCurrentUser(response.data.expirationDate));
  } catch (error) {
    yield put(getErrors(error));
  }
}

export function* attemptRegister(action) {
  try {
    const response = yield call(axios.post, `${apiURL}api/users/register`, action.payload);
    yield put(registered());
  } catch (error) {
    yield put(getErrors(error.response.data));
  }
}

export function* postLogin() {
  yield takeLatest(LOG_IN, attemptLogin);
}

export function* postRegister() {
  yield takeLatest(REGISTER, attemptRegister);
}

export default function* sagas() {
  yield all([postLogin(), postRegister()]);
}
