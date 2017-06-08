import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from './actions'
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      navClass: 'hide'
    }
  }
  logout(){
    this.props.logout();
    this.setState({expanded: false});
  }
  renderNav(){
    if (this.props.isLogged) {
      return(
        <div>
          <NavLink activeClassName="active" to='/feed' onClick={()=>this.setState({expanded: false})}><span className='ion-ios-list icon'></span> Feed</NavLink>
          <NavLink exact activeClassName="active" to='/messages' onClick={()=>this.setState({expanded: false})}><span className='ion-ios-email icon'></span> Messages</NavLink>
          <NavLink activeClassName="active" to='/user/0' onClick={()=>this.setState({expanded: false})}><span className='ion-ios-person icon'></span> Profile</NavLink>
          <NavLink activeClassName="active" to='/settings' onClick={()=>this.setState({expanded: false})}><span className='ion-gear-b icon'></span> Settings</NavLink>
          <a href='#logout' onClick={()=>this.logout()}><span className='ion-log-out icon'></span> Log Out</a>
        </div>
      )
    }else{
      return(
        <div>
          <NavLink exact activeClassName="active" to='/' onClick={()=>this.setState({expanded: false})}><span className='ion-ios-home icon'></span> Home</NavLink>
          <NavLink activeClassName="active" to='/auth/signup' onClick={()=>this.setState({expanded: false})}><span className='ion-ios-personadd icon'></span> Sign Up</NavLink>
          <NavLink exact activeClassName="active" to='/auth' onClick={()=>this.setState({expanded: false})}><span className='ion-log-in icon'></span> Log In</NavLink>
        </div>
      )
    }
  }
  renderLinks(){
    if (this.state.expanded === true) {
      return 'show'
    } else {
      return 'hide'
    }
  }
  renderIon(){
    if (this.state.expanded === true) {
      return 'ion-android-close flip'
    } else {
      return 'ion-android-menu'
    }
  }
  render() {
    return (
      <nav className='nav'>
        <div className={`nav-links ${this.renderLinks()}`}>
          <div onClick={()=>this.setState({expanded: !this.state.expanded})} className='over'></div>
          {this.renderNav()}
        </div>
        <div className='text-right'>
          <button onClick={()=>this.setState({expanded: !this.state.expanded})} className={`${this.renderIon()} menu-button`}></button>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged
  }
}
export default connect(mapStateToProps, {logout}, null, {pure:false})(Nav)
