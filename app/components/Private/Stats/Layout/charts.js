import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import styles from 'containers/Private/Stats/styles';

const Charts = props => {
  const { classes } = props;
  return (
    <Grid container spacing={4} className={classes.fullWidthChart} justify={'space-between'} alignItems={'center'}>
      {props.children}
    </Grid>
  );
};

Charts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme))(Charts);
