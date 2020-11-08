import React, {  useState } from 'react';
import { Grid,  Link, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles';
import LoginComponent from './login';
import { VIEW_OPTIONS } from '../../containers/Auth/constants';

const AuthComponent = props => {
  const { classes, onChange, onLogin, errors } = props;
  const [view, setView] = useState(VIEW_OPTIONS.VIEW_REGISTER);

  return (
    <>
      <Grid item xs={12}>
        
          <Link
            color="inherit"
            className={classNames(classes.breadcrumbs, view === VIEW_OPTIONS.VIEW_LOGIN && classes.current)}
            onClick={() => setView(VIEW_OPTIONS.VIEW_LOGIN)}
          >
            Log in
          </Link>
      </Grid>
      <br />
      <Grid container spacing={4} direction="column" justify="center">
      <LoginComponent onChange={onChange} onLogin={onLogin} classes={classes} errors={errors} />
      </Grid>
      <Grid item xs={12} align="right" className={classes.marginTopAuto}>
        <Button
          variant="contained"
          classes={{ root: classes.button }}
          onClick={() => (view === VIEW_OPTIONS.VIEW_REGISTER ? onRegister() : onLogin())}
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
