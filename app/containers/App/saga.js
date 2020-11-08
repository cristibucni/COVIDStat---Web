import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN } from './constants';
import { setCurrentUser, setLocalStorageToken, getErrors } from './actions';
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

export function* postLogin() {
  yield takeLatest(LOG_IN, attemptLogin);
}

export default function* sagas() {
  yield all([postLogin()]);
}
