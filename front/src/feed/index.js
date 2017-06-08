import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Posts from './Posts'

import Post from './Post'
import './Feed.css';
// <a onClick={()=>this.props.logout()}>logout</a>
import * as actions from '../actions'
class Feed extends Component {
    render() {
        return (this.props.isLogged
            ? (
              <div>
                <div className='section'>
                    <div className='overlay' />
                    <Route exact path='/feed' component={Posts}/>
                    <Route path='/feed/:postID' component={Post}/>
                </div>
              </div>
            )
            : (<Redirect to={{
                pathname: '/auth/'
            }}/>))
    }
}

function mapStateToProps(state) {
    return {isLogged: state.auth.isLogged}
}
export default connect(mapStateToProps, actions)(Feed)
