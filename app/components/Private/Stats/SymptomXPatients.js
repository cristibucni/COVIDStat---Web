import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ReactEcharts from 'echarts-for-react';

const SymptomXPacients = props => {
  const { symptoms, patients, classes } = props;
  const symptomXPatients = symptoms.map(symptom => {
    return {
      name: symptom.name,
      patients: patients.filter(patient =>
        patient.patientXsymptom.map(pxs => pxs.symptomId).includes(symptom.symptomId),
      ).length,
    };
  });
  return (
    <Grid conatiner item xs={12} sm={6} md={4} direction={'column'} className={classes.chartContainer}>
      <Grid item xs={12} className={classes.chartTitle}>
        Simptome frecvente
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
                data: symptomXPatients.map(item => ({ name: item.name, value: item.patients })),
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

SymptomXPacients.propTypes = {
  classes: PropTypes.object.isRequired,
  symptoms: PropTypes.array.isRequired,
};

SymptomXPacients.defaultProps = {
  symptoms: [],
};

export default SymptomXPacients;
