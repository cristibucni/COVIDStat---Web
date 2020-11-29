import {
  FETCH_COUNTIES,
  FETCH_DATA,
  FETCH_PATIENTS,
  FETCH_SYMPTOMS,
  FETCH_TESTS,
  FETCHED_COUNTIES,
  FETCHED_DATA,
  FETCHED_PATIENTS,
  FETCHED_SYMPTOMS,
  FETCHED_TESTS,
  START_LOADING,
  STOP_LOADING,
} from 'containers/Private/Stats/constants';

export function fetchPatients() {
  return {
    type: FETCH_PATIENTS,
  };
}

export function fetchedPatients(res) {
  return {
    type: FETCHED_PATIENTS,
    res,
  };
}

export function fetchCounties() {
  return {
    type: FETCH_COUNTIES,
  };
}

export function fetchedCounties(res) {
  return {
    type: FETCHED_COUNTIES,
    res,
  };
}

export function fetchPatientTests() {
  return {
    type: FETCH_TESTS,
  };
}

export function fetchedPatientTests(res) {
  return {
    type: FETCHED_TESTS,
    res,
  };
}

export function fetchSymptoms() {
  return {
    type: FETCH_SYMPTOMS,
  };
}

export function fetchedSymptoms(res) {
  return {
    type: FETCHED_SYMPTOMS,
    res,
  };
}

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function fetchedData(symptoms, tests, counties, patients) {
  return {
    type: FETCHED_DATA,
    symptoms,
    tests,
    counties,
    patients,
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
