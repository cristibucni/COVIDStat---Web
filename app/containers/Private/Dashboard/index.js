import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import DashboardSearch from 'components/Private/Dashboard/search';
import styles from './styles';
import DashboardCards from 'components/Private/Dashboard/cards';

const Dashboard = props => {
  const { classes } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className={classes.container}>
      <DashboardSearch searchTerm={searchTerm} handleChange={handleChange} />
      <DashboardCards searchTerm={searchTerm} />
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme))(Dashboard);
