import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputAdornment, withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styles from 'containers/Private/Dashboard/styles';

const DashboardSearch = props => {
  const { classes, handleChange, searchTerm } = props;
  return (
    <Input
      classes={{ root: classes.input }}
      startAdornment={
        <InputAdornment position="start">
          <Search classes={{ root: classes.inputIcon }} />
        </InputAdornment>
      }
      onChange={handleChange}
      value={searchTerm}
      placeholder={'Cauta...'}
      fullWidth
    />
  );
};

DashboardSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default withStyles(theme => styles(theme))(DashboardSearch);
