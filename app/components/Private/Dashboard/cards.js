import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { PRIVATE_MENU_ITEMS } from 'containers/Layout/utils';
import DashboardCard from 'components/Private/Dashboard/card';
import styles from 'containers/Private/Dashboard/styles';

const CARDS = PRIVATE_MENU_ITEMS.map(item => {
  return {
    ...item,
    keywords: item.text.split(' '),
  };
});

const DashboardCards = props => {
  const { classes, searchTerm } = props;
  return (
    <div className={classes.cards}>
      {CARDS.map((item, index) => {
        if (item.keywords.some(arr => arr.toLowerCase().includes(searchTerm.toLowerCase()))) {
          return <DashboardCard item={item} key={index} />;
        }
      })}
    </div>
  );
};

DashboardCards.propTypes = {
  classes: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default withStyles(theme => styles(theme))(DashboardCards);
