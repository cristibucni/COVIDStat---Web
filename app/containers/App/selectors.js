import { createSelector } from 'reselect';

const selectRouter = state => state.router;
const selectGlobal = state => state.global;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectUserIsAuthenticated = () =>
  createSelector(
    selectGlobal,
    state => state.get('isAuthenticated'),
  );
const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    state => state.get('user'),
  );
const makeSelectErrors = () =>
  createSelector(
    selectGlobal,
    state => state.get('errors'),
  );

export { makeSelectUserIsAuthenticated, makeSelectUser, makeSelectLocation, makeSelectErrors };
