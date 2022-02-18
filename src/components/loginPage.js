import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NextLink from 'next/link';
import Head from 'next/head';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { loginUserAction } from '../actions/authenticationActions';
import { setCookie,getCookie } from '../utils/cookies';
import { useFormik } from 'formik';
import {FALSE} from "node-sass";

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  componentDidMount() {
    document.title = 'Hospital Infinitum Login';
  }

  render() {
    let isSuccess, message, typeOfUser, userId;
    if (this.props.response.login.hasOwnProperty('response')) {

      isSuccess = this.props.response.login.response.success == "true";
      typeOfUser = this.props.response.login.response.type;
      message = this.props.response.login.response.reason;
      userId = this.props.response.login.response.userId;
      console.log(isSuccess,typeOfUser)
      
      if (isSuccess) {
        setCookie('userType', typeOfUser, 1);
        setCookie('userId', userId, 1);
      }
    }

    return (
      <div>
        <h3>Login Page</h3>
        {!isSuccess ? <div>{message}</div> : <Navigate to='dashboard' />}
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        Don't have account? <Link to='/register'>Register here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);