/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from 'containers/Landing/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectUser, makeSelectUserIsAuthenticated } from './selectors';
import { connect } from 'react-redux';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { compose } from 'redux';
import { register, login, setAuthToken, setCurrentUser, logout } from './actions';
import jwt_decode from 'jwt-decode';

class App extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.authToken) {
      // Set auth token header auth
      this.props.dispatch(setAuthToken(localStorage.authToken));
      const expDate = localStorage.expDate;
      // Set exp time
      this.props.dispatch(setCurrentUser(expDate));
      // Check for expired token

      const currentTime = Date.now() / 1000;
      if (expDate < currentTime) {
        this.props.dispatch(logout());
      }
    }
  }
  register = payload => {
    this.props.dispatch(register(payload));
  };
  login = payload => {
    this.props.dispatch(login(payload));
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Landing {...props} dispatch={this.props.dispatch} errors={this.props.errors} />}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isAuthenticated: makeSelectUserIsAuthenticated(),
  errors: makeSelectErrors(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
