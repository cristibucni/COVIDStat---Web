import { createSelector } from 'reselect';

const selectTests = state => state.tests;

const makeSelectTestRequests = () =>
  createSelector(
    selectTests,
    state => state.get('tests'),
  );

const makeSelectPatients = () =>
  createSelector(
    selectTests,
    state => state.get('patients'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectTests,
    state => state.get('loading'),
  );

const makeSelectHasUpdated = () =>
  createSelector(
    selectTests,
    state => state.get('hasUpdated'),
  );

export { makeSelectPatients, makeSelectTestRequests, makeSelectLoading, makeSelectHasUpdated };
