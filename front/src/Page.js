import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';

class Page extends Component {
  render() {
    return (
      <div className="App">
        <h3>Page</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  return {
    text: state.testing.text
  }
}
export default connect(mapStateToProps)(Page);
