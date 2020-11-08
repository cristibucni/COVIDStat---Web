import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import LoginComponent from './login';
const AuthComponent = props => {
  const { classes, onChange, onLogin, errors } = props;

  return (
    <>
      <Grid container spacing={4} direction="column" justify="center">
      <LoginComponent onChange={onChange} onLogin={onLogin} classes={classes} errors={errors} />
      </Grid>
      <Grid item xs={12} align="right" className={classes.marginTopAuto}>
        <Button
          variant="contained"
          classes={{ root: classes.button }}
          onClick={onLogin}
        >
         Login
        </Button>
      </Grid>
    </>
  );
};

AuthComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles())(AuthComponent);
