import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Divider, Drawer, List, withStyles } from '@material-ui/core';
import { MENU_ITEMS, PRIVATE_MENU_ITEMS } from 'containers/Layout/utils';
import NavbarItem from 'components/Navigation/navbarItem';
import styles from 'containers/Layout/Navigation/styles';
import { AuthContext } from 'containers/App/constants';

const Navbar = props => {
  const { classes, isOpen, toggleNavbar } = props;
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Drawer anchor={'left'} open={isOpen} onClose={e => toggleNavbar(e)}>
      <div className={classes.list} role="presentation" onClick={e => toggleNavbar(e)} onKeyDown={e => toggleNavbar(e)}>
        <List classes={{ root: classes.listItem }}>
          {MENU_ITEMS.map((item, index) => (
            <NavbarItem item={item} key={index} />
          ))}
        </List>
        <Divider />
        <List>
          {isAuthenticated && PRIVATE_MENU_ITEMS.map((item, index) => <NavbarItem item={item} key={index} />)}
        </List>
      </div>
    </Drawer>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default withStyles(theme => styles(theme))(Navbar);
