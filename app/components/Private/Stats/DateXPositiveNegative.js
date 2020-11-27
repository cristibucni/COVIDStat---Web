import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import { Grid, withStyles } from '@material-ui/core';
import styles from 'containers/Private/Stats/styles';

const DateXPositiveNegative = props => {
  const { tests, classes } = props;
  const allDates = _.uniq(tests && tests.map(test => test.date)).sort((a, b) => new Date(b) - new Date(a));
  const dateXPositiveNegative = allDates.map(date => {
    return {
      date,
      positive: tests.filter(test => test.date === date).filter(test => test.result === 2).length,
      negative: tests.filter(test => test.date === date).filter(test => test.result === 1).length,
    };
  });
  const data = [];
  let i = 0;
  while (i < dateXPositiveNegative.length) {
    data.push(dateXPositiveNegative.slice(i, i + Math.round(dateXPositiveNegative.length / 10)));
    i += Math.round(dateXPositiveNegative.length / 10);
  }
  return data.map((items, index) => (
    <Grid container item xs={12} sm={6} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Teste pe zile {moment(new Date(items[items.length - 1].date)).format('DD.MM.YYYY')} -{' '}
        {moment(new Date(items[0].date)).format('DD.MM.YYY')}
      </Grid>
      <Grid item xs={12} className={classes.chart}>
        <ReactEcharts
          option={{
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
              },
            },
            legend: {
              data: ['negativi', 'pozitivi'],
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '0%',
              containLabel: true,
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01],
            },
            yAxis: {
              type: 'category',
              data: items.map(item => moment(new Date(item.date)).format('DD.MM.YYYY')),
            },
            series: [
              {
                name: 'negativi',
                type: 'bar',
                data: items.map(item => item.negative),
              },
              {
                name: 'pozitivi',
                type: 'bar',
                data: items.map(item => item.positive),
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  ));
};

DateXPositiveNegative.propTypes = {
  classes: PropTypes.object.isRequired,
  tests: PropTypes.array.isRequired,
};

DateXPositiveNegative.defaultProps = {
  tests: [],
};

export default withStyles(theme => styles(theme))(DateXPositiveNegative);
