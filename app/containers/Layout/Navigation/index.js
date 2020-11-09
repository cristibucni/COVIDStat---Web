import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Navbar from 'components/Navigation/navbar';
import Header from 'components/Navigation/header';

import styles from 'containers/Layout/Navigation/styles';

const Navigation = props => {
  const { classes, logout } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.navbar}>
      <Header logout={logout} toggleNavbar={toggleNavbar} />
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default withStyles(theme => styles(theme), { withTheme: true })(Navigation);
