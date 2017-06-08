import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import moment from 'moment';
import axios from 'axios';
import {deletePost, sendReply} from '../actions';

import Reply from './Reply';
import DeleteModal from './DeleteModal';
import PostModal from './PostModal';
import Votes from './Votes';
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModal: false,
      modal: false,
      replyText: '',
      numberClass: '',
      remaining: 150,
      targetedID: '',
      post: ''
    };
    this.handleReply = this.handleReply.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchPost = this.fetchPost.bind(this);
  }
  fetchPost() {
    let self = this;
    let postID = this.props.match.params.postID;
    axios.get('http://localhost:3001/feed/' + postID).then(res => {
      let post = res.data.post;
      self.setState({post: post, replyText: ''});
    });
  }
  componentDidMount() {
    this.fetchPost();
  }
  renderDeleteButton() {
    if (Number(this.props.userID) === Number(this.state.post.user.id)) {
      return (
        <button
          onClick={() =>
            this.setState({targetedID: this.state.post.id, deleteModal: true})}>
          <span title="Delete Post" className="ion-trash-a" />
        </button>
      );
    }
  }
  closeModal() {
    this.setState({deleteModal: false}, () => {
      this.props.history.goBack();
    });
  }
  renderDeleteModal() {
    if (this.state.deleteModal === false) {
      return;
    } else {
      return (
        <DeleteModal
          onOkay={() =>
            this.props.deletePost(
              this.state.targetedID,
              this.props.user,
              this.closeModal
            )}
          closeModal={this.closeModal}
        />
      );
    }
  }
  renderModal() {
    if (this.state.modal === false) {
      return;
    } else {
      return <PostModal closeModal={() => this.setState({modal: false})} />;
    }
  }
  handleClass() {
    if (this.state.remaining < 0) {
      this.setState({numberClass: 'text-danger'});
    } else {
      this.setState({numberClass: ''});
    }
  }
  handleTextChange(e) {
    this.setState(
      {
        replyText: e.target.value
      },
      () => {
        this.setState(
          {
            remaining: 150 - this.state.replyText.length
          },
          () => {
            this.handleClass();
          }
        );
      }
    );
  }
  handleReply(e) {
    e.preventDefault();
    if (this.state.replyText.length > 0 && this.state.replyText.length <= 150) {
      this.props.sendReply(
        this.props.userID,
        this.state.post.id,
        this.state.replyText,
        this.fetchPost
      );
    } else {
      alert('improper reply');
    }
  }
  render() {
    let replies;
    if (this.state.post.replies && this.state.post.replies.length > 0) {
      replies = this.state.post.replies.map(reply => {
        return <Reply key={reply.id} reply={reply} />;
      });
    } else {
      replies = (
        <div>
          No replies yet
        </div>
      );
    }
    return this.state.post
      ? <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div className="Post">
            {this.renderDeleteModal()}
            {this.renderModal()}
            <div className="post-head space-between">
              <button
                className="btn-flexer"
                onClick={this.props.history.goBack}>
                <span title="Go Back" className="ion-ios-arrow-back" />
                Back
              </button>

              <Votes votes={this.state.post.votes} id={this.state.post.id} />
              <button
                onClick={() => this.setState({modal: true})}
                className="new-post">
                <span title="Write a post" className="ion-ios-compose" />
              </button>
            </div>

            <div className="full-post-body">
              <div className="space-between">
                <div className="post-author">
                  <Link to={`/user/${this.state.post.user.id}`}>
                    <img
                      src="https://i.redd.it/0x4bejtshuhx.png"
                      className="avatar-large"
                      alt={`Avatar: ${this.state.post.user.name.first}`}
                    />
                  </Link>
                </div>
                <p className="lead">
                  {this.state.post.post}
                  <br />
                  <small className="text-muted">
                    {moment.unix(this.state.post.date).fromNow()}
                  </small>
                  {this.renderDeleteButton()}
                </p>
              </div>
              <div className="text-left post-replies">
                <h4>Replies:</h4>
                <ul className="">
                  {replies}
                </ul>
                <form onSubmit={this.handleReply}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.replyText}
                      onChange={e => this.handleTextChange(e)}
                    />
                    <div className="text-right">
                      <span className={`${this.state.numberClass}`}>
                        {this.state.remaining}
                      </span>
                    </div>
                    <button className="reply-input">
                      <span title="Reply" className="icon ion-android-send" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CSSTransitionGroup>
      : <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div className="Post">
            {this.renderModal()}
            <div className="post-head space-between">
              <button
                className="btn-flexer"
                onClick={this.props.history.goBack}>
                <span title="Go Back" className="ion-ios-arrow-back" />
                Back
              </button>
              <button
                onClick={() => this.setState({modal: true})}
                className="new-post">
                <span title="Write a post" className="ion-ios-compose" />
              </button>
            </div>
            <div className="post-author">
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
export default connect(mapStateToProps, {deletePost, sendReply})(Post);
