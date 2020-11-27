import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchedPatientTests,
  startLoading,
  stopLoading,
  fetchedPatients,
  fetchedCounties,
  fetchedSymptoms,
  fetchedData,
} from './actions';
import apiURL from 'utils/apiURL';
import {
  FETCH_COUNTIES,
  FETCH_DATA,
  FETCH_PATIENTS,
  FETCH_SYMPTOMS,
  FETCH_TESTS,
} from 'containers/Private/Stats/constants';

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

export function* getCounties(action) {
  try {
    yield put(startLoading());
    const response = yield call(axios.get, `${apiURL}County/GetCounties`);
    yield put(fetchedCounties(response.data));
    yield put(stopLoading());
  } catch (error) {
    yield put(stopLoading());
  }
}

export function* takeGetCounties() {
  yield takeLatest(FETCH_COUNTIES, getCounties);
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

export function* getSymptoms(action) {
  try {
    yield put(startLoading());
    const response = yield call(axios.get, `${apiURL}Symptom/GetSymptoms`);
    yield put(fetchedSymptoms(response.data));
    yield put(stopLoading());
  } catch (error) {
    yield put(stopLoading());
  }
}

export function* takeGetSymptoms() {
  yield takeLatest(FETCH_TESTS, getSymptoms);
}

export function* getData(action) {
  try {
    yield put(startLoading());
    const symptoms = yield call(axios.get, `${apiURL}Symptom/GetSymptoms`);
    const tests = yield call(axios.get, `${apiURL}PatientTest/GetTests`);
    const counties = yield call(axios.get, `${apiURL}County/GetCounties`);
    const patients = yield call(axios.get, `${apiURL}Patient/GetPatients`);
    yield put(fetchedData(symptoms.data, tests.data, counties.data, patients.data));
    yield put(stopLoading());
  } catch (error) {
    yield put(stopLoading());
  }
}

export function* takeGetData() {
  yield takeLatest(FETCH_DATA, getData);
}

export default function* sagas() {
  yield all([takeGetPatients(), takeGetCounties(), takeGetData(), takeGetSymptoms(), takeGetTests()]);
}
