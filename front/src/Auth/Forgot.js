import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import * as actions from '../actions'

class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailClass: '',
            emailErr: ''
        }
        this.handleForgot = this.handleForgot.bind(this);
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    handleForgot(e) {
        e.preventDefault();
        const {email, password} = this.state;
        if (this.validateEmail(email)) {
            this.setState({emailClass: 'has-success', emailErr: ''})
            this.props.forgot(email, password);
        } else {
            this.setState({emailClass: 'has-danger', emailErr: 'Email is invalid'})
        }
    }
    render() {
        return (
            <CSSTransitionGroup transitionAppear={true} transitionAppearTimeout={500} transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <div className='form-wrap comp'>
                    <div className='form-head'>
                        <h3 className='display-4'>
                            <span className='ion-ios-locked-outline icon display-3'></span>
                            Reset PW</h3>
                    </div>
                    <div className='form-body'>
                        <p>Recieve an email with steps to resetting.</p>
                        <form onSubmit={this.handleForgot}>
                            <div className={`form-group ${this.state.emailClass}`}>
                                <label htmlFor='email' className='lead'>
                                    <span className='ion-ios-email-outline icon'></span>
                                    {" "}Email</label>
                                <input id='email' className={`input form-control ${this.state.emailClass}`} type='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                <span className='text-danger'>{this.state.emailErr}</span>
                            </div>
                            <small>*all fields required</small>
                            <button id='signUpButton' className='btn' type='submit'>Receive reset email
                                <span className='ion-ios-arrow-forward'></span>
                            </button>
                        </form>
                    </div>
                    <div className='form-footer'>
                        <Link to='/auth/'>Back to login</Link>
                    </div>
                </div>
            </CSSTransitionGroup>
        );
    }
}
export default connect(null, actions)(Forgot)
