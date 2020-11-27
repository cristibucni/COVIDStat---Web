import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { ExitToApp, LocalHospital, LockOpen, Menu } from '@material-ui/icons';
import { AuthContext } from 'containers/App/constants';
import styles from 'containers/Layout/Navigation/styles';

const Header = props => {
  const { classes, toggleNavbar, logout } = props;
  const { isAuthenticated } = useContext(AuthContext);
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
        {isAuthenticated ? (
          <Button color="inherit" onClick={logout}>
            Logout
            <ExitToApp />
          </Button>
        ) : (
          <Button color="inherit">
            Log in
            <LockOpen />
          </Button>
        )}
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
