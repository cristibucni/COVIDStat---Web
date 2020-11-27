import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from 'containers/Landings/Info/styles';

const Item = props => {
  const { classes, title, text, image, isReversed } = props;
  return (
    <div className={isReversed ? classNames(classes.infoContainer, classes.reversed) : classes.infoContainer}>
      <div className={classes.bodyContainer}>
        <div className={classes.title}>{title}</div>
        <div className={classes.textContainer}>{text}</div>
      </div>
      <div className={classes.imageContainer}>
        <img src={image} className={classes.image} />
      </div>
    </div>
  );
};

Item.propTypes = {
  isReversed: PropTypes.bool,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(theme => styles(theme))(Item);
