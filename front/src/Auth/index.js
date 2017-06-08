import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Signup from "./Signup";
import Login from "./Login";
import Forgot from "./Forgot";
import "./Auth.css";
class Auth extends Component {
  render() {
    return this.props.isLogged
      ? <Redirect
          to={{
            pathname: "/feed/"
          }}
        />
      : <div className="section mapped">
          <div className="overlay" />
          <Route exact path="/auth" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/auth/forgot" component={Forgot} />
        </div>;
  }
}
function mapStateToProps(state) {
  return { isLogged: state.auth.isLogged };
}
export default connect(mapStateToProps)(Auth);
