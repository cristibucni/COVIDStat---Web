import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import { makeSelectUser, makeSelectUserIsAuthenticated } from '../App/selectors';
import Auth from '../Auth';
import styles from './styles';

class Landing extends Component {
  render() {
    const { classes, isAuthenticated } = this.props;
    return isAuthenticated ? 'aaaa' : <Auth dispatch={this.props.dispatch} classes={classes} />;
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectUserIsAuthenticated(),
  user: makeSelectUser(),
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles()),
)(Landing);
