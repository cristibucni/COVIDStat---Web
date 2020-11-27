import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

const AgeXPatients = props => {
  const { patients, classes } = props;
  const ages = _.uniq(patients.map(patient => patient.age)).sort((a, b) => a - b);
  const ageXPatients = ages.map(age => ({
    age,
    patients: patients.filter(patient => patient.totalScore > 200).filter(patient => patient.age === age).length,
  }));
  return (
    <Grid conatiner item xs={12} sm={6} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Pacienti impartiti pe varsta
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
                data: ageXPatients.map(item => item.age),
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
                barWidth: '60%',
                data: ageXPatients.map(item => item.patients),
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
};

AgeXPatients.propTypes = {
  patients: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

AgeXPatients.defaultProps = {
  patients: [],
};

export default AgeXPatients;
