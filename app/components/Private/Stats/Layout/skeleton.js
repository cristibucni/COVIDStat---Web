import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, withStyles } from '@material-ui/core';
import SkeletonItem from 'components/Private/Stats/Layout/skeletonItem';
import styles from 'containers/Private/Stats/styles';

const LoadingSkeleton = props => {
  const { classes } = props;
  return (
    <>
      <Grid container className={classes.fullWidthChart}>
        <Skeleton variant="text" width={'100%'} height={80} />
      </Grid>
      <SkeletonItem classes={classes} />
      <SkeletonItem classes={classes} />
      <SkeletonItem classes={classes} />
      <SkeletonItem classes={classes} />
    </>
  );
};

LoadingSkeleton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme))(LoadingSkeleton);
