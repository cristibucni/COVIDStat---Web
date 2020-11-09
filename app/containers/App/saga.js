import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN } from './constants';
import { setCurrentUser, setLocalStorageToken, getErrors, startLoading, stopLoading } from './actions';
import apiURL from '../../utils/apiURL';

export function* attemptLogin(action) {
  try {
    yield put(startLoading());
    const response = yield call(axios.post, `${apiURL}/Authentication`, action.userData);
    const token = response.data.authToken;
    // Set current user
    yield put(setLocalStorageToken(token));
    yield put(setCurrentUser(response.data.expirationDate));
    yield put(stopLoading());
  } catch (error) {
    yield put(stopLoading());
    yield put(getErrors(error));
  }
}

export function* postLogin() {
  yield takeLatest(LOG_IN, attemptLogin);
}

export default function* sagas() {
  yield all([postLogin()]);
}
