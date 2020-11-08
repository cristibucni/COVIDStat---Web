import React from 'react';
import { TextField, Grid } from '@material-ui/core';

const LoginComponent = props => {
  const { onChange } = props;
  return (
    <>
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
    </>
  );
};

export default LoginComponent;
