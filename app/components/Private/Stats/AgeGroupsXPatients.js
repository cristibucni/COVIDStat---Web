import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import { AGE_GROUPS } from 'containers/Private/Stats/utils';
import { Grid, withStyles } from '@material-ui/core';
import styles from 'containers/Private/Stats/styles';

const AgeGroupsXPatients = props => {
  const { patients, classes } = props;
  const ageGroupsXPatients = AGE_GROUPS.map((ageGroup, index) => ({
    ageGroup,
    patients: patients
      .filter(patient => patient.totalScore > 200)
      .filter(patient =>
        index !== 8 ? patient.age >= Number(index * 10) && patient.age <= Number(index * 10 + 9) : patient.age > 80,
      ).length,
  }));
  return (
    <Grid container item xs={12} sm={6} md={4} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Pacienti impartiti pe grupe de varsta
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
                data: ageGroupsXPatients.map(item => ({ name: item.ageGroup, value: item.patients })),
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

AgeGroupsXPatients.propTypes = {
  classes: PropTypes.object.isRequired,
  patients: PropTypes.array.isRequired,
};

AgeGroupsXPatients.defaultProps = {
  patients: [],
};
export default withStyles(theme => styles(theme))(AgeGroupsXPatients);
