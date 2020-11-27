import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import SkeletonItem from 'components/Private/Stats/Layout/skeletonItem';

const LoadingSkeleton = props => {
  const { classes } = props;
  return (
    <>
      <Grid container className={classes.fullWidthChart}>
        <Skeleton variant="text" width={'100%'} height={80} />
      </Grid>
      <SkeletonItem classes={classes}/>
      <SkeletonItem classes={classes}/>
      <SkeletonItem classes={classes}/>
      <SkeletonItem classes={classes}/>
    </>
  );
};

LoadingSkeleton.propTypes = {};

export default LoadingSkeleton;
