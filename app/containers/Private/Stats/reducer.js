import axios from 'axios';
import { fromJS } from 'immutable';
import { START_LOADING, STOP_LOADING, FETCHED_TESTS, FETCHED_PATIENTS, FETCHED_COUNTIES } from './constants';
import { FETCHED_DATA } from 'containers/Private/Stats/constants';
import _ from 'lodash';
export const initialState = fromJS({
  tests: null,
  patients: null,
  counties: null,
  symptoms: null,
  loading: true,
});

function statsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_PATIENTS: {
      return state.set('patients', action.res);
    }
    case FETCHED_COUNTIES: {
      return state.set('counties', action.res);
    }
    case FETCHED_TESTS: {
      return state.set('tests', action.res);
    }
    case FETCHED_DATA: {
      return state
        .set('symptoms', action.symptoms)
        .set('tests', action.tests)
        .set('counties', action.counties)
        .set('patients', action.patients);
    }
    case START_LOADING: {
      return state.set('loading', true);
    }
    case STOP_LOADING: {
      return state.set('loading', false);
    }
    default:
      return state;
  }
}

export default statsReducer;
