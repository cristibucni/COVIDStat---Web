import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from 'containers/Landings/Info/styles';

const DoubleTextItem = props => {
  const { classes, title1, text1, title2, text2, image } = props;
  return (
    <>
      <div className={classes.doubleTextContainer}>
        <div className={classes.doubleBodyContainer}>
          <div className={classes.title}>{title1}</div>
          <div className={classes.doubleTextContent}>
            {text1.map((textItem, index) => (
              <li key={index}>{textItem}</li>
            ))}
          </div>
        </div>
        <div className={classes.doubleBodyContainer}>
          <div className={classes.title}>{title2}</div>
          <div className={classes.doubleTextContent}>
            {text2.map((textItem, index) => (
              <li key={index}>{textItem}</li>
            ))}
          </div>
        </div>
      </div>
      <img src={image} className={classes.doubleImage} />
    </>
  );
};

DoubleTextItem.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  text1: PropTypes.array.isRequired,
  text2: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};

export default withStyles(theme => styles(theme))(DoubleTextItem);
