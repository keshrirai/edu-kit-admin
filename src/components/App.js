import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// import { withRouter } from 'react-router';

import Layout from "./Layout";

import Error from "../pages/error";
import Login from "../pages/login";
import CustomLogin from "../pages/CustomLogin";
// import Home from "../pages/home";
import Signup from "../pages/signup";
import Forgot from "../pages/forgot";
import Resend from "../pages/Resend";
import VerifyEmail from "../pages/VerifyEmail";
import ValidateToken from "../pages/ValidateToken/ValidateToken";
import forgotUserName from "../pages/forgotUserName/forgotUserName";
import NetworkDetector from '../../src/components/Hoc/NetworkDetector';


function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={(Layout)} />
        <PublicRoute path="/login" component={(Login)} />
        <PublicRoute path="/customlogin/:id" component={(CustomLogin)} />
        {/* <PublicRoute exact path="/login" component={(Home)} /> */}
        <PublicRoute exact path="/signup/:id?" component={(Signup)} />
        <PublicRoute exact path="/forgot" component={(Forgot)} />
        <PublicRoute exact path="/forgotUserName" component={(forgotUserName)} />
        <PublicRoute path="/resend" component={(Resend)} />
        <PublicRoute path="/verifyemail/:id/:token" component={(VerifyEmail)} />
        <PublicRoute path="/validateToken/:id" component={(ValidateToken)} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          window.sessionStorage.getItem('user') ? (
          // true ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          false ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}


export default NetworkDetector(App);
// export default (App);