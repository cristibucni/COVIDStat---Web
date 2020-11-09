import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core';

import { makeSelectUserIsAuthenticated } from 'containers/App/selectors';

import Navbar from 'components/Navigation/navbar';
import Header from 'components/Navigation/header';

import styles from './styles';

const Navigation = props => {
  const { classes, logout, isAuthenticated } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.navbar}>
      <Header logout={logout} toggleNavbar={toggleNavbar} />
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} isAuthenticated={isAuthenticated} />
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectUserIsAuthenticated(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  withStyles(theme => styles(theme), { withTheme: true }),
)(Navigation);
