import React from 'react';
import {Link} from 'react-router-dom';
export default class Reply extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="reply">
        <Link to="/user/5" className="reply-author">
          <img
            src="https://i.redd.it/0x4bejtshuhx.png"
            className="avatar-xs"
            alt="user avatar"
          />
          {this.props.reply.user.name.first}
          {' '}{this.props.reply.user.name.last.substr(0, 1)}.
        </Link>
        <a className="reply-link" onClick={() => console.log('Reply Modal')}>
          {' '}{this.props.reply.reply}
        </a>
      </li>
    );
  }
}
