import React, { Component } from 'react';
import {connect} from 'react-redux'

import * as actions from './actions'


class App extends Component {
  render() {
    return (
        <div className="App" style={{zIndex: 1000}}>
          <h5>hello</h5>
          <input type='text' value={this.props.text} onChange={(e) => this.props.textChange(e.target.value)}/>
          <p>{this.props.text}</p>
        </div>

    );
  }
}

function mapStateToProps(state){
  return {
    text: state.testing.text
  }
}
export default connect(mapStateToProps, actions)(App);
