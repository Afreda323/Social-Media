import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Votes from '../feed/Votes';
import axios from 'axios';
import moment from 'moment';
import Lightbox from './Lightbox';
import PostModal from '../feed/PostModal';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      score: '',
      src: '',
      lightbox: false,
      modal: false,
      isUser: false,
    };
    this.toggleLightbox = this.toggleLightbox.bind(this);
    this.renderLightbox = this.renderLightbox.bind(this);
  }
  componentDidMount() {
    let self = this;
    axios
      .get('http://localhost:3001/user/' + this.props.match.params.userID)
      .then(res => {
        console.log(res.data);
        self.setState({data: res.data.user}, () => {
          console.log(self.props.userID + ' ' + self.props.match.params.userID)
          if ( String(self.props.userID) === String(self.props.match.params.userID) ) {
            self.setState({
              isUser: true
            });
          }
        });
      });
  }
  shorten(text) {
    if (text.length >= 70) {
      return text.substr(0, 70) + '...';
    } else {
      return text;
    }
  }
  blockUser(id) {
    alert('Blocked ' + id);
  }
  renderModal() {
    if (this.state.modal === false) {
      return;
    } else {
      return <PostModal closeModal={() => this.setState({modal: false})} />;
    }
  }
  toggleLightbox(src) {
    this.setState({src: src, lightbox: true});
  }
  renderLightbox(src) {
    if (this.state.lightbox === true && this.state.src) {
      return (
        <Lightbox
          src={this.state.src}
          onClick={() => this.setState({src: '', lightbox: false})}
        />
      );
    } else {
      return;
    }
  }
  renderDate(date) {
    return moment.unix(date).fromNow();
  }
  render() {
    let userID = this.props.match.params.userID;
    let renderedPosts = (
      <li className="post" style={{border: 0}}>
        <div className="post-body">
          <p className="lead">
            Loading...
            <br />
            <small className="text-muted">
              ...
            </small>
          </p>
        </div>
      </li>
    );
    let score = 0;
    if (this.state.data && this.state.data.posts.length > 0) {
      renderedPosts = this.state.data.posts.map(post => {
        score +=
          Number(post.votes.ups.length) - Number(post.votes.downs.length);
        return (
          <li key={post.id} className="post row">
            <div className="post-body col-sm-10 col-12">
              <Link to={`/feed/${post.id}`}>
                <p className="lead padded">
                  {this.shorten(post.post)}
                  <br />
                  <small className="text-muted">
                    {this.renderDate(post.date)}
                  </small>
                </p>
              </Link>
            </div>
            <Votes votes={post.votes} id={post.id} />
          </li>
        );
      });
    }
    return this.state.data !== ''
      ? <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div className="Author">
            {this.renderLightbox()}
            {this.renderModal()}
            <div className="author-head">
              <button
                className="btn-flexer"
                onClick={this.props.history.goBack}>
                <span title="Go Back" className="ion-ios-arrow-back icon" />
                Back
              </button>
              <button
                onClick={() => this.setState({modal: true})}
                className="new-post">
                <span title="Write a post" className="ion-ios-compose icon" />
              </button>
            </div>
            <div className="author-top">
              <div
                className="author-img-bg"
                style={{
                  backgroundImage: 'url("https://i.redd.it/0x4bejtshuhx.png")'
                }}
              />
              <div className="author-detail">
                <a
                  className="author-img-link"
                  onClick={() =>
                    this.toggleLightbox('https://i.redd.it/0x4bejtshuhx.png')}>
                  <img
                    src="https://i.redd.it/0x4bejtshuhx.png"
                    className="avatar-author"
                    alt={`Avatar: ${this.state.data.name.first} ${this.state
                      .data.name.last}`}
                  />
                </a>
                <div className="author-text">
                  <div className="author-name">
                    <h2 className="no-marg">{this.state.data.name.first}</h2>
                  </div>
                  <h4 className="no-marg">Score: {score}</h4>
                  {this.state.isUser
                    ? <div className="button">
                        <Link to={'/settings'}>Edit Profile</Link>
                      </div>
                    : <div>
                        <button
                          onClick={() => this.blockUser(this.state.data.id)}>
                          Block User
                        </button>
                      </div>}
                  <hr />
                  <p className="lead">
                    Lorem ipsum dolor sit amet, eirmod diceret accumsan est ut.
                    Ei novum mediocritatem qui, quas eruditi te vel.
                  </p>
                </div>
              </div>
              {this.state.isUser
                ? <div className="btn-wrapper">
                    <button
                      onClick={() => this.setState({modal: true})}
                      className="btn">
                      Write a Post
                      {' '}<span
                        title="Write a post"
                        className="ion-ios-compose icon"
                      />
                    </button>
                  </div>
                : <div className="btn-wrapper">
                    <Link
                      className="btn"
                      to={`/messages/${this.state.data.id}`}>
                      Send Message<span
                        title="Send Message"
                        className="ion-android-send icon"
                      />
                    </Link>
                  </div>}
            </div>
            <ul className="posts-list container-fluid">
              {renderedPosts}
            </ul>
          </div>
        </CSSTransitionGroup>
      : <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div className="Author">
            {this.renderLightbox()}
            {this.renderModal()}
            <div className="author-head">
              <button
                className="btn-flexer"
                onClick={this.props.history.goBack}>
                <span title="Go Back" className="ion-ios-arrow-back icon" />
                Back
              </button>
              <button
                onClick={() => this.setState({modal: true})}
                className="new-post">
                <span title="Write a post" className="ion-ios-compose icon" />
              </button>
            </div>
            <div className="author-top">
              <h1>Something went wrong</h1>
            </div>
          </div>
        </CSSTransitionGroup>;
  }
}

function mapStateToProps(state) {
  return {
    userID: state.auth.userID
  };
}
export default connect(mapStateToProps)(User);
