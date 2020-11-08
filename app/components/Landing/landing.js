import React, { Component, useState } from 'react';
import { Grid, Breadcrumbs, Link, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles';
import layoutStyles from 'containers/Layout/styles';
import RegisterComponent from './register';
import LoginComponent from './login';
import LeftCard from './leftCard';
import { VIEW_OPTIONS } from '../../containers/Auth/constants';

const AuthComponent = props => {
  const { classes, onChange, onLogin, onRegister, errors } = props;
  const [view, setView] = useState(VIEW_OPTIONS.VIEW_REGISTER);
  const RENDER_COMPONENT = {
    [VIEW_OPTIONS.VIEW_REGISTER]: (
      <RegisterComponent onChange={onChange} onRegister={onRegister} classes={classes} errors={errors} />
    ),
    [VIEW_OPTIONS.VIEW_LOGIN]: (
      <LoginComponent onChange={onChange} onLogin={onLogin} classes={classes} errors={errors} />
    ),
  };
  return (
    <>
      <Grid item xs={12}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            className={classNames(classes.breadcrumbs, view === VIEW_OPTIONS.VIEW_REGISTER && classes.current)}
            onClick={() => setView(VIEW_OPTIONS.VIEW_REGISTER)}
          >
            Register
          </Link>
          <Link
            color="inherit"
            className={classNames(classes.breadcrumbs, view === VIEW_OPTIONS.VIEW_LOGIN && classes.current)}
            onClick={() => setView(VIEW_OPTIONS.VIEW_LOGIN)}
          >
            Log in
          </Link>
        </Breadcrumbs>
      </Grid>
      <br />
      <Grid container spacing={4} direction="column" justify="center">
        {RENDER_COMPONENT[view]}
      </Grid>
      <Grid item xs={12} align="right" className={classes.marginTopAuto}>
        <Button
          variant="contained"
          classes={{ root: classes.button }}
          onClick={() => (view === VIEW_OPTIONS.VIEW_REGISTER ? onRegister() : onLogin())}
        >
          {view === VIEW_OPTIONS.VIEW_REGISTER ? 'Register' : 'Login'}
        </Button>
      </Grid>
    </>
  );
};

AuthComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles())(AuthComponent);
