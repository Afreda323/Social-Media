import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import moment from "moment";
import * as actions from '../actions'

class Convo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      errMessage: '',
      errClass: ''
    }
    this.handleMessage = this.handleMessage.bind(this);
  }
  componentDidMount() {
    if (document.getElementById('messages')) {
      let messages = document.getElementById('messages');
      messages.scrollTop = messages.scrollHeight;
    }
  }
  renderDate(date){
      return moment.unix(date).format("M/D/YYYY, h:mma");
  }

  handleMessage(e, id){
    e.preventDefault();
    this.setState({
      errMessage: '',
      errClass: ''
    });
    if (this.state.messageText.length < 1) {
      this.setState({
        errMessage: 'Enter a message',
        errClass: 'has-danger'
      });
    }else if (this.state.messageText.length > 500) {
      this.setState({
        errMessage: 'Message is too long',
        errClass: 'has-danger'
      });
    }
    let messages = document.getElementById('messages');
    messages.scrollTop = messages.scrollHeight;
    this.props.sendMessage(id, this.state.messageText);
  }
  render() {
    let messages;
    if (inbox[this.props.match.params.ID]) {
       messages = inbox[this.props.match.params.ID].messages.sort((a, b) => a.timestamp - b.timestamp).map((mess) => {
         if (mess.isOwn === true) {
           return (
             <div className='row'>
               <div className='message-to col-lg-7 col-md-8 col-sm-10 col-11 offset-lg-5 offset-md-4 offset-sm-2 offset-1'>
                 <p className='message lead'>
                   <span className='messageText'>{mess.text}</span>
                   <small className='text-muted text-right'>{this.renderDate(mess.timestamp)}</small>
               </p>
               </div>
            </div>
           )
         }else {
           return (
             <div className='row'>
               <div className='message-from col-lg-7 col-md-8 col-sm-10 col-11'>
                 <div className='wrap'>
                   <Link to={`/user/${inbox[this.props.match.params.ID].user.id}`}>
                     <img
                       src="https://i.redd.it/0x4bejtshuhx.png"
                       className="convo-avatar"
                       alt={`Avatar`}
                     />
                   </Link>
                   <p className='message lead'>
                     <span className='messageText'>{mess.text}</span>
                     <br />
                     <small className='text-muted'>{this.renderDate(mess.timestamp)}</small>
                   </p>
               </div>
              </div>
            </div>
           )
         }
      })
    }else {
       messages = <p>No Messages yet</p>
    }

    return (
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div className='Convo'>
          <div className='inbox-head'>
            <button className="btn-flexer" onClick={this.props.history.goBack}>
                <span title="Go Back" className="ion-ios-arrow-back icon"/>
                Back
            </button>
          </div>
          <div className='container-fluid messages'>
            <div id='messages' className='convo-inner'>
              {messages}
            </div>
          </div>
          <div className='message-form'>
              <form onSubmit={(e) => this.handleMessage(e, this.props.match.params.ID)}>
                  <div className={`form-group ${this.state.errClass}`}>
                      <input type="text" className="form-control" value={this.state.messageText} onChange={(e)=>this.setState({messageText: e.target.value})}/>
                      <button className="reply-input">
                          <span title="Reply" className="icon ion-android-send"/>
                      </button>
                      <div className="form-control-feedback">{this.state.errMessage}</div>
                  </div>
              </form>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default connect(null, actions)(Convo)

const inbox = [
  {
    user: {
      id: 0,
      name: {
        first: 'Jim',
        last: 'John'
      }
    },
    latest: 1496674255,
    messages: [
      {
        timestamp: 1496674231,
        text: 'Hello my friend',
        isOwn: true
      },
      {
        timestamp: 1496674243,
        text: 'Whats good bruh',
        isOwn: false
      },
      {
        timestamp: 1496674248,
        text: 'This app is cool',
        isOwn: false
      },
      {
        timestamp: 1496674255,
        text: 'I know, I love it!!',
        isOwn: true
      }
    ]
  },
  {
    user: {
      id: 2,
      name: {
        first: 'Jane',
        last: 'John'
      }
    },
    latest: 1496678177,
    messages: [
      {
        timestamp: 1496674231,
        text: 'Hello my friend',
        isOwn: true
      },
      {
        timestamp: 1496674243,
        text: 'Whats good bruh',
        isOwn: false
      },
      {
        timestamp: 1496674248,
        text: 'This app is cool',
        isOwn: false
      },
      {
        timestamp: 1496674275,
        text: 'I know, I love it!!',
        isOwn: true
      },
      {
        timestamp: 1496678177,
        text: 'I know, I love it!! ipsum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: true
      },
      {
        timestamp: 1496678977,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: false
      }
    ]
  },
  {
    user: {
      id: 1,
      name: {
        first: 'jim',
        last: 'Beanz'
      }
    },
    latest: 1496678977,
    messages: [
      {
        timestamp: 1496674231,
        text: 'Hello my friend',
        isOwn: true
      },
      {
        timestamp: 1496674243,
        text: 'Whats good bruh',
        isOwn: false
      },
      {
        timestamp: 1496674248,
        text: 'This app is cool',
        isOwn: false
      },
      {
        timestamp: 1496674275,
        text: 'I know, I love it!!',
        isOwn: false
      },
      {
        timestamp: 1496678277,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: true
      },
      {
        timestamp: 1496678977,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: false
      },
      {
        timestamp: 1496674231,
        text: 'Heyy ',
        isOwn: true
      },
      {
        timestamp: 1496674243,
        text: 'Whats good bruh',
        isOwn: true
      },
      {
        timestamp: 1496674248,
        text: 'This app is cool',
        isOwn: true
      },
      {
        timestamp: 1496674275,
        text: 'I know, I love it!!',
        isOwn: true
      },
      {
        timestamp: 1496678277,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: false
      },
      {
        timestamp: 1496678977,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: true
      }
    ]
  }
]
