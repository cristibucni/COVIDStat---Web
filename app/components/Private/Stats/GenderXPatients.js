import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import Grid from '@material-ui/core/Grid';

const GenderXPatients = props => {
  const { patients, classes } = props;
  const genders = ['F', 'M'];
  const genderXPatients = genders.map(gender => ({
    gender,
    patients:
      patients &&
      patients.filter(patient => patient.totalScore > 200).filter(patient => patient.gender === gender).length,
  }));
  return (
    <Grid conatiner item xs={12} sm={6} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Pacienti impartiti pe gen
      </Grid>
      <Grid item xs={12} className={classes.chart}>
        <ReactEcharts
          option={{
            color: ['#3398DB'],
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
                data: genderXPatients.map(item => item.gender),
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
                name: 'Numar pozitivi',
                type: 'bar',
                barWidth: '10%',
                data: genderXPatients.map(item => item.patients),
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
};

GenderXPatients.propTypes = {};

export default GenderXPatients;
