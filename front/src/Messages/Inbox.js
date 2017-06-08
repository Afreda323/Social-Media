import React, {Component} from 'react';
import {connect} from 'react-redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import ConvoList from './ConvoList'

class Inbox extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div className='Inbox'>
          <h2 className='text-center inbox-title'>Inbox</h2>
          <div className='inbox-head'>
            <button className="btn-flexer" onClick={this.props.history.goBack}>
                <span title="Go Back" className="ion-ios-arrow-back icon"/>
                Back
            </button>
          </div>
          <ConvoList messages={inbox} />
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default connect()(Inbox)

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
    latest: 1496678277,
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
        timestamp: 1496678277,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: true
      }
    ]
  },
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
    latest: 1496678277,
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
        timestamp: 1496678277,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: true
      }
    ]
  },
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
    latest: 1496678277,
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
        timestamp: 1496678277,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: true
      }
    ]
  },
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
    latest: 1496678277,
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
        timestamp: 1496678277,
        text: 'psum lorem sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOwn: true
      }
    ]
  }
]
