import {
  FETCH_TESTS,
  FETCHED_TESTS,
  START_LOADING,
  STOP_LOADING,
  FETCHED_PATIENTS,
  FETCH_PATIENTS,
  FETCH_DATA,
  FETCHED_DATA,
  MARK_AS_POSITIVE,
  SET_HAS_UPDATED,
} from './constants';
import { MARK_AS_NEGATIVE, MARKED_AS_POSITIVE } from 'containers/Private/TestRequests/constants';

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

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function fetchedData(tests, patients) {
  return {
    type: FETCHED_DATA,
    tests,
    patients,
  };
}

export function markAsPositive(testId) {
  return {
    type: MARK_AS_POSITIVE,
    testId,
  };
}

export function markAsNegative(testId) {
  return {
    type: MARK_AS_NEGATIVE,
    testId,
  };
}

export function setHasUpdated() {
  return {
    type: SET_HAS_UPDATED,
  };
}

export function stopLoading() {
  return {
    type: STOP_LOADING,
  };
}
