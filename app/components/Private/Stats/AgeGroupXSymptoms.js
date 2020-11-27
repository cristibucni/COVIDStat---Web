import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import { AGE_GROUPS } from 'containers/Private/Stats/utils';
import { withStyles } from '@material-ui/core';
import styles from 'containers/Private/Stats/styles';

const AgeGroupXSymptoms = props => {
  const { symptoms, patients, classes } = props;
  const data = symptoms.map(symptom => ({
    name: symptom.name,
    type: 'bar',
    label: symptom.name,
    data: AGE_GROUPS.map((ageGroup, index) => {
      return patients
        .filter(patient =>
          index !== 8 ? patient.age >= Number(index * 10) && patient.age <= Number(index * 10 + 9) : patient.age > 80,
        )
        .filter(patient => patient.patientXsymptom.map(pxs => pxs.symptomId).includes(symptom.symptomId)).length;
    }),
  }));

  return (
    <Grid container item xs={12} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Histograma simptomelor in functie de grupele de varsta
      </Grid>
      <Grid item xs={12} className={classes.biggerChart}>
        <ReactEcharts
          option={{
            color: [
              '#e6194b',
              '#3cb44b',
              '#ffe119',
              '#4363d8',
              '#f58231',
              '#911eb4',
              '#46f0f0',
              '#f032e6',
              '#bcf60c',
              '#fabebe',
              '#008080',
              '#e6beff',
              '#9a6324',
              '#fffac8',
              '#800000',
              '#aaffc3',
              '#808000',
              '#ffd8b1',
              '#000075',
              '#808080',
              '#ffffff',
              '#000000',
            ],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
              },
            },
            legend: {
              data: symptoms.map(symptom => symptom.name),
            },
            xAxis: [
              {
                type: 'category',
                axisTick: { show: false },
                data: AGE_GROUPS.map(ageGroup => ageGroup),
              },
            ],
            yAxis: [
              {
                type: 'value',
              },
            ],
            series: data,
          }}
        />
      </Grid>
    </Grid>
  );
};

AgeGroupXSymptoms.propTypes = {
  classes: PropTypes.object.isRequired,
  symptoms: PropTypes.array.isRequired,
};

AgeGroupXSymptoms.defaultProps = {
  symptoms: [],
};

export default withStyles(theme => styles(theme))(AgeGroupXSymptoms);
