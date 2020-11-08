import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Container, Paper, Zoom } from '@material-ui/core';
import { login, register } from '../App/actions';
import { VIEW_OPTIONS } from './constants';
import { makeSelectErrors } from '../App/selectors';
import AuthComponent from '../../components/landing/landing';

class Auth extends Component {
  constructor(props) {
    super();
    this.state = {
      view: VIEW_OPTIONS.VIEW_REGISTER,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
    this.wrapper = React.createRef();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onRegister = () => {
    const payload = {
      email: this.state.email,
      name: `${this.state.firstName} ${this.state.lastName}`,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirm,
    };
    this.props.dispatch(register(payload));
  };

  onLogin = () => {
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.dispatch(login(payload));
  };
  render() {
    const { classes, errors } = this.props;
    return (
      <Container classes={{ root: classes.root }} maxWidth="xl">
        <Zoom in ref={this.wrapper}>
          <Paper elevation={3} className={classes.landingPaper}>
            <AuthCompoanent
              onChange={this.onChange}
              onRegister={this.onRegister}
              onLogin={this.onLogin}
              errors={errors}
            />
          </Paper>
        </Zoom>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  errors: makeSelectErrors(),
});

export default compose(connect(mapStateToProps))(Auth);
