import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import * as actions from "../actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailClass: "",
      emailErr: "",
      password: "",
      passwordClass: "",
      passwordErr: "",
      isLoading: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (this.validateEmail(email)) {
      this.setState({ emailClass: "has-success", emailErr: "" });
      if (password.length > 5) {
        this.setState({
          passwordClass: "has-success",
          passwordErr: "",
          isLoading: true
        });
        this.props.login(email, password);
      } else {
        this.setState({
          passwordClass: "has-danger",
          passwordErr: "At least 6 characters"
        });
      }
    } else {
      this.setState({ emailClass: "has-danger", emailErr: "Email is invalid" });
    }
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div className="form-wrap comp">
          <div className="form-head">
            <h3 className="display-4">
              {" "}<span className="ion-log-in icon display-3" /> Log In
            </h3>
          </div>
          <div className="form-body">
            <form onSubmit={this.handleLogin}>
              <div className={`form-group ${this.state.emailClass}`}>
                <label htmlFor="email" className="lead">
                  <span className="ion-ios-email-outline icon" /> Email
                </label>
                <input
                  id="email"
                  className={`input form-control ${this.state.emailClass}`}
                  type="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <span className="text-danger">{this.state.emailErr}</span>
              </div>
              <div className={`form-group ${this.state.passwordClass}`}>
                <label htmlFor="password" className="lead">
                  <span className="ion-ios-locked-outline icon" /> Password
                  &nbsp;
                  <Link to="/auth/forgot">
                    <small>Forgot your password?</small>
                  </Link>
                </label>
                <input
                  id="password"
                  className="input form-control"
                  type="password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <span className="text-danger">{this.state.passwordErr}</span>
              </div>
              <small>*all fields required</small>
              <button id="logInButton" className="btn" type="submit">
                Log in <span className="ion-ios-arrow-forward" />
              </button>
            </form>
          </div>
          <div className="form-footer">
            <Link to="/auth/signup">Not a member? Sign up</Link>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}
export default connect(null, actions)(Login);
