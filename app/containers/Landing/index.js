import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { makeSelectUser, makeSelectUserIsAuthenticated } from '../App/selectors';
import Auth from './Auth';
import HomePage from '../HomePage';
import styles from './styles';

const Landing = props => {
  const { classes, isAuthenticated } = props;
  return isAuthenticated ? <HomePage /> : <Auth dispatch={props.dispatch} classes={classes} />;
};
const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectUserIsAuthenticated(),
  user: makeSelectUser(),
});

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withStyles(styles()),
)(Landing);
