import { createSelector } from 'reselect';

const selectStats = state => state.stats;

const makeSelectTests = () =>
  createSelector(
    selectStats,
    state => state.get('tests'),
  );

const makeSelectPatients = () =>
  createSelector(
    selectStats,
    state => state.get('patients'),
  );

const makeSelectCounties = () =>
  createSelector(
    selectStats,
    state => state.get('counties'),
  );

const makeSelectSymptoms = () =>
  createSelector(
    selectStats,
    state => state.get('symptoms'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectStats,
    state => state.get('loading'),
  );

export { makeSelectPatients, makeSelectTests, makeSelectCounties, makeSelectSymptoms, makeSelectLoading };
