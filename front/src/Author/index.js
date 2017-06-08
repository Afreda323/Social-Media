import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import User from './User'
import './Author.css';

class Author extends Component {
  render() {
    return(
      this.props.isLogged ? (
        <div className='section'>
          <div className='overlay'></div>
          <Route exact path='/user/:userID' component={User} />
        </div>
    ) : (
      <Redirect to={ {pathname: '/auth/'}}/>
      )
    )
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged
  }
}
export default connect(mapStateToProps)(Author)
