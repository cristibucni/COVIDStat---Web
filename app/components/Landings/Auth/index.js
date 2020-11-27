import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Button, CircularProgress, FormControl, TextField, Typography, withStyles } from '@material-ui/core';
import { LocalHospital } from '@material-ui/icons';
import { AuthContext } from 'containers/App/constants';
import styles from './styles';

const LoginComponent = props => {
  const { onChange, classes, onLogin } = props;
  const { loading } = useContext(AuthContext);
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onLogin();
    }
  };
  return (
    <>
      <div className={classes.title}>
        <LocalHospital color={'secondary'} />
        <Typography variant="h6">COVIDStat - Autentificare</Typography>
      </div>
      <div className={classes.form}>
        <FormControl className={classes.formControl} fullWidth>
          <TextField
            dislabed={loading}
            fullWidth
            label="Email"
            name="email"
            onChange={onChange}
            onKeyPress={onKeyPress}
            required
            variant={'outlined'}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <TextField
            dislabed={loading}
            fullWidth
            label="Password"
            name="password"
            onChange={onChange}
            onKeyPress={onKeyPress}
            required
            type="password"
            variant={'outlined'}
          />
        </FormControl>
        <Button variant="contained" disabled={loading} onClick={onLogin} classes={{ root: classes.button }}>
          {loading ? <CircularProgress color="secondary" size={24.5} /> : 'Log in'}
        </Button>
      </div>
    </>
  );
};

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default compose(withStyles(theme => styles(theme)))(LoginComponent);
