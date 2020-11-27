import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import Grid from '@material-ui/core/Grid';

const Symptoms = props => {
  const { symptoms, classes } = props;
  return (
    <Grid conatiner item xs={12} sm={6} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Simptome generale covid si gravitatea lor
      </Grid>
      <Grid item xs={12} className={classes.chart}>
        <ReactEcharts
          option={{
            color: ['#1627b3'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
              },
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true,
            },
            xAxis: [
              {
                type: 'category',
                data: symptoms.map(item => item.name),
                axisTick: {
                  alignWithLabel: true,
                },
              },
            ],
            yAxis: [
              {
                type: 'value',
              },
            ],
            series: [
              {
                name: 'Scor',
                type: 'bar',
                barWidth: '60%',
                data: symptoms.map(item => item.score),
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
};

Symptoms.propTypes = {};

export default Symptoms;
