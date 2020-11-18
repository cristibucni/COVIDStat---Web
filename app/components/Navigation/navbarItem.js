import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, withStyles } from '@material-ui/core';
import styles from 'containers/Layout/Navigation/styles';

const NavbarItem = props => {
  const { classes, item } = props;
  return (
    <Link className={classes.link} to={item.link}>
      <ListItem button>
        <ListItemIcon>{item.icon(classes.icon)}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    </Link>
  );
};

NavbarItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme))(NavbarItem);
