import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Landing from 'containers/Landing/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import reducer from './reducer';
import injectReducer from '../../utils/injectReducer';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import { login, setAuthToken, setCurrentUser, logout } from './actions';
import { makeSelectErrors, makeSelectUser, makeSelectUserIsAuthenticated } from './selectors';

import GlobalStyle from '../../global-styles';

class App extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.authToken) {
      // Set auth token header auth
      this.props.dispatch(setAuthToken(localStorage.authToken));
      const { expDate } = localStorage;
      // Set exp time
      this.props.dispatch(setCurrentUser(expDate));
      // Check for expired token

      const currentTime = Date.now() / 1000;
      if (expDate < currentTime) {
        this.props.dispatch(logout());
      }
    }
  }

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

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

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
