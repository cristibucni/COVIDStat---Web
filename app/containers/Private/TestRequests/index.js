import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import { withStyles } from '@material-ui/core';
import MaterialTable from 'material-table';

import reducer from './reducer';
import injectReducer from 'utils/injectReducer';
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import { fetchPatientTests, fetchPatients, fetchData, markAsPositive, setHasUpdated, markAsNegative } from './actions';
import { makeSelectLoading, makeSelectPatients, makeSelectHasUpdated, makeSelectTestRequests } from './selectors';
import { makeSelectUser, makeSelectUserIsAuthenticated } from 'containers/App/selectors';

import styles from './styles';

class TestRequests extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.tests) && _.isEmpty(this.props.patients)) {
      this.props.dispatch(fetchData());
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.hasUpdated && prevProps.hasUpdated !== this.props.hasUpdated) {
      this.props.dispatch(setHasUpdated());
    }
  }

  render() {
    const { classes, tests, loading, patients, hasUpdated } = this.props;
    const mergedData =
      !_.isEmpty(tests) &&
      !_.isEmpty(patients) &&
      tests.map(test => ({
        ...test,
        patient: `${patients.find(patient => patient.patientId === test.patientId).fisrtName} ${
          patients.find(patient => patient.patientId === test.patientId).lastName
        }`,
      }));
    const columns = [
      { title: 'Nume pacient', field: 'patient' },
      { title: 'Data', field: 'date', render: rowData => moment(new Date(rowData.date)).format('DD.MM.YYYY') },
      {
        title: 'Rezultat',
        field: 'result',
        render: rowData => (rowData.result === 2 ? 'Pozitiv' : rowData.result === 1 ? 'Negativ' : 'In asteptare'),
        customFilterAndSearch: (term, rowData) => rowData.result.toString().includes(term),
      },
    ];
    const data = !_.isEmpty(mergedData)
      ? mergedData
          .map(test => ({
            patientTestId: test.patientTestId,
            patient: test.patient,
            date: test.date,
            result: test.result,
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      : [];
    return (
      <div className={classes.testsContainer}>
        <MaterialTable
          columns={columns}
          data={data}
          isLoading={_.isEmpty(patients) || _.isEmpty(tests)}
          title="Cereri de testare"
          options={{
            headerStyle: { zIndex: 0, borderTop: '1px solid #f2f2f2' },
            rowStyle: row => row.tableData.id % 2 && { backgroundColor: '#f2f2f2' },
            padding: 'dense',
            pageSize: 15,
            pageSizeOptions: [5, 10, 15, 20, 25, 50, 100],
            filtering: true,
            actionsColumnIndex: -1,
          }}
          actions={[
            rowData =>
              rowData.result === 0 && {
                icon: 'check',
                tooltip: 'Marcheaza ca pozitiv',
                onClick: (event, rowData) => this.markAsPositive(rowData.patientTestId),
              },
            rowData =>
              rowData.result === 0 && {
                icon: 'close',
                tooltip: 'Marcheaza ca negativ',
                onClick: (event, rowData) => this.markAsNegative(rowData.patientTestId),
              },
          ]}
        />
      </div>
    );
  }

  markAsPositive = testId => {
    this.props.dispatch(markAsPositive(testId));
  };
  markAsNegative = testId => {
    this.props.dispatch(markAsNegative(testId));
  };
}

TestRequests.propTypes = {
  tests: PropTypes.array,
  patients: PropTypes.array,
};

TestRequests.defaultProps = {
  tests: [],
  patients: [],
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isAuthenticated: makeSelectUserIsAuthenticated(),
  loading: makeSelectLoading(),
  tests: makeSelectTestRequests(),
  patients: makeSelectPatients(),
  hasUpdated: makeSelectHasUpdated(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'tests', reducer });
const withSaga = injectSaga({ key: 'tests', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(theme => styles(theme)),
)(TestRequests);
