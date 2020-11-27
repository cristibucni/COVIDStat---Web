import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const Charts = props => {
  const { classes } = props;
  return (
    <Grid container spacing={4} className={classes.fullWidthChart} justify={'space-between'} alignItems={'center'}>
      {props.children}
    </Grid>
  );
};

Charts.propTypes = {};

export default Charts;
