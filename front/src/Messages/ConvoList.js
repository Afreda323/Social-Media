import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import moment from "moment";

class ConvoList extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  shorten(text){
    if (text.length >= 65) {
      return (text.substr(0, 65) + '...')
    }else {
      return text
    }
  }
  renderDate(date){
      return moment.unix(date).fromNow();
  }
  render() {
    let convos = this.props.messages.sort((a, b) => b.latest - a.latest).map((convo) => {
      return (
        <li>
            <div className='container-fluid'>
              <div className='row convo'>
                <div className='col-3 text-center'>
                  <Link to={`/messages/${convo.user.id}`}>
                    <img
                      src="https://i.redd.it/0x4bejtshuhx.png"
                      className="avatar-small"
                      alt={`Avatar`}
                    />
                  </Link>
                </div>
                <div className='col-9'>
                  <p className='latest lead'>
                    <Link to={`/messages/${convo.user.id}`}>
                      {this.shorten(convo.messages[convo.messages.length - 1].text)}
                    </Link>
                    <small className='text-muted'>{this.renderDate(convo.latest)}</small>
                  </p>
                </div>
              </div>
            </div>

        </li>
      )
    })
    return (
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div className='Convos'>
          <ul className='convos'>
            {convos}
          </ul>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default connect()(ConvoList)
