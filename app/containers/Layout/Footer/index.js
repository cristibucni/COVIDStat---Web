import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'containers/Layout/Footer/styles';
import { LocalHospital } from '@material-ui/icons';

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <div className={classes.credits}>
        <LocalHospital fontSize={'large'} color={'secondary'} classes={{ root: classes.logo }} />
        COVIDStat - Un proiect realizat in cadrul disciplinei ????.
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default withStyles(theme => styles(theme))(Footer);
