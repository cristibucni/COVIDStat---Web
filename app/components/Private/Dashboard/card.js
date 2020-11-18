import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from 'containers/Private/Dashboard/styles';

const DashboardCard = props => {
  const { classes, item } = props;
  return (
    <Link className={classes.link} to={item.link}>
      <div className={classes.card}>
        {item.icon(classes.cardIcon)}
        <div className={classes.cardText}>{item.text}</div>
      </div>
    </Link>
  );
};

DashboardCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};
export default withStyles(theme => styles(theme))(DashboardCard);
