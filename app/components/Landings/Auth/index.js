import React, { useContext } from 'react';
import { Button, CircularProgress, FormControl, TextField, Typography, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import styles from './styles';
import { LocalHospital } from '@material-ui/icons';
import { AuthContext } from 'containers/App/constants';

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
            fullWidth
            label="Email"
            name="email"
            onChange={onChange}
            onKeyPress={onKeyPress}
            variant={'outlined'}
            required
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <TextField
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
        <Button variant="contained" onClick={onLogin} classes={{ root: classes.button }}>
          {loading ? <CircularProgress color="secondary" size={24.5} /> : 'Log in'}
        </Button>
      </div>
    </>
  );
};

export default compose(withStyles(theme => styles(theme)))(LoginComponent);
