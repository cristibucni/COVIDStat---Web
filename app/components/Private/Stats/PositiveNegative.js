import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const PositiveNegative = props => {
  const { tests, classes } = props;
  const positiveNegative = {
    positive: tests.filter(test => test.result === 2).length,
    negative: tests.filter(test => test.result === 1).length,
  };
  return (
    <Grid container className={classes.positiveNegativeContainer}>
      <Grid item className={classes.positive} xs={positiveNegative.positive > positiveNegative.negative ? 7 : 5}>
        {positiveNegative.positive && <>Teste pozitve {positiveNegative.positive}</>}
      </Grid>
      <Grid item className={classes.negative} xs={positiveNegative.positive < positiveNegative.negative ? 7 : 5}>
        {positiveNegative.negative && <>Teste negative {positiveNegative.negative}</>}
      </Grid>
    </Grid>
  );
};

PositiveNegative.propTypes = {
  tests: PropTypes.array.isRequired,
};

PositiveNegative.defaultProps = {
  tests: [],
};
export default PositiveNegative;
