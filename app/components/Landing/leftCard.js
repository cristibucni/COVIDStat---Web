import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

class LeftCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={12} md={4} lg={4} classes={{ root: classes.leftCard }}>
        <img src={require('./logo.png')} className={classes.logo} alt="logo" />
        <Typography variant="h3" align="center">
          Welcome
        </Typography>
        <Typography variant="h5" align="center">
          Your brand new study companion.
        </Typography>
      </Grid>
    );
  }
}

LeftCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LeftCard;
