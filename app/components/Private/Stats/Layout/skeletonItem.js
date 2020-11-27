import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonItem = props => {
  const { classes } = props;
  return (
    <Grid container spacing={2} className={classes.fullWidthChart} justify={'center'} alignItems={'center'}>
      <Grid item xs={6}>
        <Skeleton variant="text" width={'100%'} height={80} />
        <Skeleton variant="rect" width={'100%'} height={220} />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="text" width={'100%'} height={80} />
        <Skeleton variant="rect" width={'100%'} height={220} />
      </Grid>
    </Grid>
  );
};

SkeletonItem.propTypes = {};

export default SkeletonItem;
