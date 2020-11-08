import React from 'react';
import { Button, Grid, TextField, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import styles from './styles';

const LoginComponent = props => {
  const { onChange, classes, onLogin} = props;
  return (
    <Grid container spacing={4} direction="column" justify="center">
      <Grid item xs={12}>
        <TextField fullWidth label="E-Mail" name="email" onChange={onChange} variant="outlined" autoComplete="false" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          onChange={onChange}
          variant="outlined"
          autoComplete="false"
        />
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
    </Grid>
  );
};

export default compose(withStyles(styles()))(LoginComponent);
