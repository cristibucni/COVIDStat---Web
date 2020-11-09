import React from 'react';``
import PropTypes from 'prop-types';
import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { ExitToApp, LocalHospital, Menu } from '@material-ui/icons';
import styles from 'containers/Utils/Layout/Navigation/styles';

const Header = props => {
  const { classes, toggleNavbar, logout } = props;
  return (
    <AppBar classes={{ root: classes.appBar }} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={e => toggleNavbar(e)}
        >
          <Menu />
        </IconButton>
        <LocalHospital />
        <Typography variant="h6" className={classes.title}>
          COVIDStat
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout
          <ExitToApp />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default withStyles(theme => styles(theme))(Header);
