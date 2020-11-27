import axios from 'axios';
import { fromJS } from 'immutable';
import {
  START_LOADING,
  STOP_LOADING,
  FETCHED_TESTS,
  FETCHED_PATIENTS,
  FETCHED_DATA,
  MARK_AS_POSITIVE,
  MARKED_AS_POSITIVE,
  MARK_AS_NEGATIVE,
} from './constants';
import _ from 'lodash';
import { SET_HAS_UPDATED } from 'containers/Private/TestRequests/constants';

export const initialState = fromJS({
  tests: null,
  patients: null,
  loading: true,
  hasUpdated: false,
});

function testRequestsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_PATIENTS: {
      return state.set('patients', action.res);
    }
    case FETCHED_TESTS: {
      return state.set('tests', action.res);
    }
    case FETCHED_DATA: {
      return state.set('tests', action.tests).set('patients', action.patients);
    }
    case START_LOADING: {
      return state.set('loading', true);
    }
    case STOP_LOADING: {
      return state.set('loading', false);
    }
    case MARK_AS_POSITIVE: {
      const tests = state.get('tests');
      const testToUpdate = tests.find(test => test.patientTestId === action.testId);
      tests[tests.indexOf(testToUpdate)].result = 2;
      return state.set('tests', tests).set('hasUpdated', true);
    }
    case MARK_AS_NEGATIVE: {
      const tests = state.get('tests');
      const testToUpdate = tests.find(test => test.patientTestId === action.testId);
      tests[tests.indexOf(testToUpdate)].result = 1;
      return state.set('tests', tests).set('hasUpdated', true);
    }
    case SET_HAS_UPDATED: {
      return state.set('hasUpdated', false);
    }
    default:
      return state;
  }
}

export default testRequestsReducer;
