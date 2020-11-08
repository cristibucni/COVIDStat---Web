import React, { Component, useContext } from 'react';
import { TextField, Grid } from '@material-ui/core';

class RegisterComponent extends Component {
  render() {
    const { onChange, errors } = this.props;
    return (
      <>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="First name" name="firstName" onChange={onChange} variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Last name" name="lastName" onChange={onChange} variant="outlined" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="E-Mail"
            name="email"
            onChange={onChange}
            variant="outlined"
            error={errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            onChange={onChange}
            variant="outlined"
            error={errors.password}
            helperText={errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            label="Confirm password"
            name="passwordConfirm"
            onChange={onChange}
            variant="outlined"
            defaultValue=""
          />
        </Grid>
      </>
    );
  }
}

export default RegisterComponent;
