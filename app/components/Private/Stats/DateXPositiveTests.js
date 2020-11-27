import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import { Grid, withStyles } from '@material-ui/core';
import styles from 'containers/Private/Stats/styles';

const DateXPositiveTests = props => {
  const { tests, classes } = props;
  const dates = _.uniq(tests && tests.filter(test => test.result === 2).map(test => test.date));
  const dateXPositiveTests = dates
    .map(date => ({
      date,
      positiveTests: tests && tests.filter(test => test.date === date).filter(test => test.result === 2).length,
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <Grid container item xs={12} sm={6} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Teste pozitive pe zile
      </Grid>
      <Grid item xs={12} className={classes.chart}>
        <ReactEcharts
          option={{
            xAxis: {
              type: 'category',
              data: dateXPositiveTests.map(item => new Date(item.date).toLocaleDateString()),
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                data: dateXPositiveTests.map(item => item.positiveTests),
                type: 'line',
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
};

DateXPositiveTests.propTypes = {
  tests: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme))(DateXPositiveTests);
