import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ReactEcharts from 'echarts-for-react';

const CountyXPatients = props => {
  const { counties, patients, classes } = props;
  const countyXPatients =
    counties &&
    counties
      .sort((a, b) => (a.name.trim() < b.name.trim() ? -1 : a.name.trim() > b.name.trim() ? 1 : 0))
      .map(county => ({
        countyName: county.name.trim(),
        patients: patients
          .filter(patient => patient.totalScore > 200)
          .filter(patient => patient.countyId === county.countyId).length,
      }));
  return (
    <Grid conatiner item xs={12} sm={6} md={4} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Pacienti impartiti pe judete
      </Grid>
      <Grid item xs={12} className={classes.chart}>
        <ReactEcharts
          option={{
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            series: [
              {
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: countyXPatients.map(item => ({ name: item.countyName, value: item.patients })),
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                  },
                },
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
};

CountyXPatients.propTypes = {};

export default CountyXPatients;
