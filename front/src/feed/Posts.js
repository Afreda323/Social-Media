import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Votes from './Votes';
import PostModal from './PostModal';
import axios from 'axios';
import moment from 'moment';
export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      recent: true,
      hot: false,
      recentClass: '',
      hotClass: '',
      data: ''
    };
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByHot = this.sortByHot.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }
  shorten(text) {
    if (text.length >= 70) {
      return text.substr(0, 70) + '...';
    } else {
      return text;
    }
  }
  renderDate(date) {
    return moment.unix(date).fromNow();
  }
  sortByDate() {
    if (this.state.data) {
      this.setState({
        hot: false,
        recent: true,
        data: this.state.data.sort((a, b) => b.date - a.date),
        recentClass: 'active',
        hotClass: ''
      });
    }
  }
  sortByHot() {
    if (this.state.data) {
      this.setState({
        hot: true,
        recent: false,
        data: this.state.data.sort((a, b) => b.votes - a.votes),
        recentClass: '',
        hotClass: 'active'
      });
    }
  }
  getPosts() {
    let self = this;
    axios.get('http://localhost:3001/feed').then(res => {
      console.log(res);
      if (Array.isArray(res.data.posts) && res.data.posts.length > 0) {
        self.setState({data: res.data.posts});
        if (self.state.hot === true) {
          self.sortByHot();
        } else {
          self.sortByDate();
        }
      } else {
        self.setState({data: 'No Posts'});
      }
    });
  }
  componentDidMount() {
    this.getPosts();
  }
  renderModal() {
    if (this.state.modal === false) {
      return;
    } else {
      return <PostModal closeModal={() => this.setState({modal: false})} />;
    }
  }
  render() {
    let renderedPosts = <p className="lead">Loading posts...</p>;
    if (this.state.data && this.state.data !== 'No Posts') {
      renderedPosts = this.state.data.map(post => {
        return (
          <li className="post row">
            <div className="author col-sm-3 col-3 text-center">
              <Link to={`/user/${post.user.id}`}>
                <img
                  src="https://i.redd.it/0x4bejtshuhx.png"
                  className="avatar-small"
                  alt={`Avatar`}
                />
              </Link>
            </div>
            <div className="post-body col-sm-7 col-9">
              <Link to={`/feed/${post.id}`}>
                <p className="lead">
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
    } else if (this.state.data === 'No Posts') {
      renderedPosts = (
        <h3>
          There are no posts in your area.
          {' '}<a href="#post" onClick={() => this.setState({modal: true})}>
            Be the first
          </a>
        </h3>
      );
    }
    return (
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div className="Posts">
          {this.renderModal()}
          <div className="post-fixed">
            <div className="posts-controls">
              <div className="left">
                <button onClick={this.sortByDate} className="recent">
                  <span
                    title="Sort by most recent"
                    className={`ion-ios-clock icon ${this.state.recentClass}`}
                  />
                </button>
                <button onClick={this.sortByHot} className="hot">
                  <span
                    title="Sort by most votes"
                    className={`ion-fireball icon ${this.state.hotClass}`}
                  />
                </button>
                <button onClick={this.getPosts} className="refresh">
                  <span title="Refresh Feed" className="ion-refresh icon" />
                </button>
              </div>
              <div className="right">
                <button
                  onClick={() => this.setState({modal: true})}
                  className="new-post">
                  <span title="Write a post" className="ion-ios-compose icon" />
                </button>
              </div>
            </div>
          </div>

          <ul className="posts-list container-fluid">
            {renderedPosts}
          </ul>
        </div>
      </CSSTransitionGroup>
    );
  }
}
