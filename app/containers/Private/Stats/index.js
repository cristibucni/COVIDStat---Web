import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core';

import reducer from './reducer';
import injectReducer from 'utils/injectReducer';
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import { fetchCounties, fetchData, fetchPatients, fetchPatientTests } from 'containers/Private/Stats/actions';
import {
  makeSelectCounties,
  makeSelectLoading,
  makeSelectPatients,
  makeSelectSymptoms,
  makeSelectTests,
} from './selectors';
import { makeSelectUser, makeSelectUserIsAuthenticated } from 'containers/App/selectors';

import GenderXPatients from 'components/Private/Stats/GenderXPatients';
import CountyXPatients from 'components/Private/Stats/CountyXPatients';
import DateXPositiveTests from 'components/Private/Stats/DateXPositiveTests';
import AgeXPatients from 'components/Private/Stats/AgeXPatients';
import AgeGroupsXPatients from 'components/Private/Stats/AgeGroupsXPatients';
import DateXPositiveNegative from 'components/Private/Stats/DateXPositiveNegative';
import Symptoms from 'components/Private/Stats/Symptoms';
import SymptomXPatients from 'components/Private/Stats/SymptomXPatients';
import PositiveNegative from 'components/Private/Stats/PositiveNegative';
import AgeGroupXSymptoms from 'components/Private/Stats/AgeGroupXSymptoms';
import LoadingSkeleton from 'components/Private/Stats/Layout/skeleton';
import Charts from 'components/Private/Stats/Layout/charts';

import styles from './styles';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { patients, tests, counties, symptoms } = this.props;
    if (_.isEmpty(patients) && _.isEmpty(tests) && _.isEmpty(counties) && _.isEmpty(symptoms)) {
      this.getData();
    }
  }

  render() {
    const { isAuthenticated, user, loading, classes, patients, tests, counties, symptoms } = this.props;
    if (loading) {
      return <LoadingSkeleton />;
    }

    return (
      <div className={classes.statsContainer}>
        <PositiveNegative tests={tests} />
        <Charts>
          <CountyXPatients patients={patients} counties={counties} />
          <AgeGroupsXPatients patients={patients} />
          <SymptomXPatients symptoms={symptoms} patients={patients} />
        </Charts>
        <Charts>
          <AgeGroupXSymptoms symptoms={symptoms} patients={patients} />
        </Charts>
        <Charts>
          <AgeXPatients patients={patients} />
          <DateXPositiveTests tests={tests} />
        </Charts>
        <Charts>
          <GenderXPatients patients={patients} />
          <Symptoms symptoms={symptoms} />
        </Charts>

        <Charts>
          <DateXPositiveNegative tests={tests} />
        </Charts>
      </div>
    );
  }

  getData = () => {
    this.props.dispatch(fetchData());
  };

  getPatients = () => {
    this.props.dispatch(fetchPatients());
  };

  getTests = () => {
    this.props.dispatch(fetchPatientTests());
  };

  getCounties = () => {
    this.props.dispatch(fetchCounties());
  };
}

Stats.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isAuthenticated: makeSelectUserIsAuthenticated(),
  loading: makeSelectLoading(),
  patients: makeSelectPatients(),
  tests: makeSelectTests(),
  counties: makeSelectCounties(),
  symptoms: makeSelectSymptoms(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'stats', reducer });
const withSaga = injectSaga({ key: 'stats', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(theme => styles(theme)),
)(Stats);
