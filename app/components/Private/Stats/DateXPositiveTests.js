import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ReactEcharts from 'echarts-for-react';
import _ from 'lodash';

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
    <Grid conatiner item xs={12} sm={6} direction={'column'} className={classes.chartContainer}>
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

DateXPositiveTests.propTypes = {};

export default DateXPositiveTests;
