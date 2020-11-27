import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchedPatientTests, startLoading, stopLoading, fetchedPatients, fetchedData } from './actions';
import apiURL from 'utils/apiURL';
import { FETCH_TESTS, FETCH_PATIENTS, FETCH_DATA, MARK_AS_POSITIVE } from './constants';
import { markedAsPositive } from 'containers/Private/TestRequests/actions';

export function* getPatients(action) {
  try {
    yield put(startLoading());
    const response = yield call(axios.get, `${apiURL}Patient/GetPatients`);
    yield put(fetchedPatients(response.data));
    yield put(stopLoading());
  } catch (error) {
    yield put(stopLoading());
  }
}

export function* takeGetPatients() {
  yield takeLatest(FETCH_PATIENTS, getPatients);
}

export function* getTests(action) {
  try {
    yield put(startLoading());
    const response = yield call(axios.get, `${apiURL}PatientTest/GetTests`);
    yield put(fetchedPatientTests(response.data));
    yield put(stopLoading());
  } catch (error) {
    yield put(stopLoading());
  }
}

export function* takeGetTests() {
  yield takeLatest(FETCH_TESTS, getTests);
}

export function* getData(action) {
  try {
    yield put(startLoading());
    const tests = yield call(axios.get, `${apiURL}PatientTest/GetTests`);
    const patients = yield call(axios.get, `${apiURL}Patient/GetPatients`);
    yield put(fetchedData(tests.data, patients.data));
    yield put(stopLoading());
  } catch (error) {
    yield put(stopLoading());
  }
}

export function* takeGetData() {
  yield takeLatest(FETCH_DATA, getData);
}

export default function* sagas() {
  yield all([takeGetTests(), takeGetPatients(), takeGetData()]);
}
