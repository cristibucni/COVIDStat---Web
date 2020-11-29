import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import NotFoundPage from 'containers/Utils/NotFoundPage/Loadable';
import { ThemeProvider } from '@material-ui/core/styles';

import reducer from './reducer';
import injectReducer from 'utils/injectReducer';
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import { login, logout, setAuthToken, setCurrentUser } from './actions';
import { AuthContext } from 'containers/App/constants';
import { makeSelectErrors, makeSelectUser, makeSelectUserIsAuthenticated, makeSelectLoading } from './selectors';
import theme from 'containers/Layout/theme';
import history from 'utils/history';

import Dashboard from '../Private/Dashboard/Loadable';
import Stats from 'containers/Private/Stats/Loadable';
import TestRequests from 'containers/Private/TestRequests/Loadable';
import Auth from '../Landings/Auth/Loadable';
import Navigation from 'containers/Layout/Navigation';
import Credits from 'containers/Private/Credits/Loadable';
import Info from 'containers/Landings/Info/Loadable';
import Footer from 'containers/Layout/Footer';
import PublicRoute from 'containers/Routes/PublicRoute';
import PrivateRoute from 'containers/Routes/PrivateRoute';

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

  logout = () => {
    this.props.dispatch(logout());
    history.push('/');
  };

  render() {
    const { isAuthenticated, user, loading } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ isAuthenticated, user, loading }}>
          <Navigation logout={this.logout} />
          <Switch>
            <Route exact path="/" render={() => (isAuthenticated ? <Dashboard /> : <Auth />)} />
            <PublicRoute restricted={false} component={Info} path="/info" exact />
            <PrivateRoute isAuthenticated={isAuthenticated} component={Stats} path="/stats" exact />
            <PrivateRoute isAuthenticated={isAuthenticated} component={TestRequests} path="/tests" exact />
            <PrivateRoute isAuthenticated={isAuthenticated} component={Credits} path="/credits" exact />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </AuthContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isAuthenticated: makeSelectUserIsAuthenticated(),
  errors: makeSelectErrors(),
  loading: makeSelectLoading(),
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
