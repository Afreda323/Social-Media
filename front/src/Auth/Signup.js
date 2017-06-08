import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import * as actions from "../actions";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      fNameClass: "",
      fNameErr: "",
      lastName: "",
      lNameClass: "",
      lNameErr: "",
      email: "",
      emailClass: "",
      emailErr: "",
      password: "",
      passwordClass: "",
      passwordErr: "",
      confirmPassword: "",
      confirmClass: "",
      confirmErr: ""
    };
    this.handleSignup = this.handleSignup.bind(this);
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  handleSignup(e) {
    e.preventDefault();
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword
    } = this.state;
    if (this.validateEmail(email)) {
      this.setState({ emailClass: "has-success", emailErr: "" });
      if (firstName.length > 0) {
        this.setState({ fNameClass: "has-success", fNameErr: "" });
        if (lastName.length > 0) {
          this.setState({ lNameClass: "has-success", lNameErr: "" });
          if (password.length > 5) {
            this.setState({ passwordClass: "has-success", passwordErr: "" });
            if (confirmPassword === password) {
              this.setState({ confirmClass: "has-success", confirmErr: "" });
              this.props.signup(email, password, firstName, lastName);
            } else {
              this.setState({
                confirmClass: "has-danger",
                confirmErr: "Passwords do not match"
              });
            }
          } else {
            this.setState({
              passwordClass: "has-danger",
              passwordErr: "At least 6 characters"
            });
          }
        } else {
          this.setState({
            lNameClass: "has-danger",
            lNameErr: "Enter your last name"
          });
        }
      } else {
        this.setState({
          fNameClass: "has-danger",
          fNameErr: "Enter your first name"
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
              <span className="ion-ios-plus-outline icon display-3" /> Sign Up
            </h3>
          </div>
          <div className="form-body">
            <form onSubmit={this.handleSignup}>
              <div className="half-input-wrap">
                <div className={`form-group ${this.state.fNameClass}`}>
                  <label htmlFor="firstName" className="lead">
                    <span className="ion-ios-person-outline icon" /> First Name
                  </label>
                  <input
                    id="firstName"
                    className="input form-control"
                    type="text"
                    value={this.state.firstName}
                    onChange={e => this.setState({ firstName: e.target.value })}
                  />
                  <span className="text-danger">{this.state.fNameErr}</span>
                </div>
                <div className={`form-group ${this.state.lNameClass}`}>
                  <label htmlFor="lastName" className="lead">
                    <span className="ion-ios-people-outline icon" /> Last Name
                  </label>
                  <input
                    id="lastName"
                    className="input form-control"
                    type="text"
                    value={this.state.lastName}
                    onChange={e => this.setState({ lastName: e.target.value })}
                  />
                  <span className="text-danger">{this.state.lNameErr}</span>
                </div>
              </div>
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
              <div className={`form-group ${this.state.confirmClass}`}>
                <label htmlFor="confirm-password" className="lead">
                  <span className="ion-ios-unlocked-outline icon" />
                  {" "}
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  className="input form-control"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={e =>
                    this.setState({ confirmPassword: e.target.value })}
                />
                <span className="text-danger">{this.state.confirmErr}</span>
              </div>
              <small>*all fields </small>
              <button id="signUpButton" className="btn" type="submit">
                Sign Up <span className="ion-ios-arrow-forward" />
              </button>
            </form>
          </div>
          <div className="form-footer">
            <Link to="/auth">Already a member? Log in</Link>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}
export default connect(null, actions)(Signup);
