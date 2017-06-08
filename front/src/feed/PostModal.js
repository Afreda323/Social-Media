import React from "react";
import {connect} from 'react-redux'
import {createPost} from '../actions'
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      textClass: "",
      numberClass: "",
      remaining: 150,
      err: " "
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClasses = this.handleClasses.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }
  renderButton() {
    let length = this.state.text.length;
    if (length > 0 && length <= 150) {
      return (
        <button id="postPost" className="btn" type="submit">
          Post it
          <span className="ion-android-send" />
        </button>
      );
    } else {
      return (
        <button id="postPost" className="btn disabled danger" type="submit">
          Not yet
          <span className="ion-android-hand" />
        </button>
      );
    }
  }
  handleClasses() {
    let length = this.state.text.length;
    if (length > 150) {
      this.setState({ numberClass: "text-danger", textClass: "has-danger" });
    } else if (length > 0 && length <= 150) {
      this.setState({ numberClass: "text-success", textClass: "has-success" });
    } else {
      this.setState({ numberClass: "text-muted", textClass: "has-danger" });
    }
  }
  handleTextChange(e) {
    this.setState(
      {
        text: e.target.value,
        err: " "
      },
      () => {
        this.handleClasses();
        this.setState({
          remaining: 150 - this.state.text.length
        });
      }
    );
  }
  handlePost(e) {
    e.preventDefault();
    let length = this.state.text.length;
    if (length > 150) {
      this.setState({ err: "Post is too long" });
    } else if (length > 0 && length <= 150) {
      this.props.createPost(this.state.text, this.props.user, this.props.closeModal)
    } else {
      this.setState({
        numberClass: "text-danger",
        textClass: "has-danger",
        err: "Not long enough."
      });
    }
  }
  render() {
    return (
      <div className="modal-wrap">
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div className="modal-section">
            <form onSubmit={this.handlePost}>
              <div className="modal-head space-between">
                <label htmlFor="new-post">
                  <h3>Write a post</h3>
                </label>
                <button onClick={this.props.closeModal}>
                  <span title="Close" className="ion-ios-close modal-close" />
                </button>
              </div>
              <div className={`form-group ${this.state.textClass}`}>
                <textarea
                  autoFocus
                  id="new-post"
                  className="form-control"
                  value={this.state.text}
                  onChange={e => this.handleTextChange(e)}
                />
                <div className="space-between">
                  <div className="form-control-feedback">{this.state.err}</div>
                  <small className={`${this.state.numberClass}`}>
                    {this.state.remaining}
                  </small>
                </div>
              </div>
              {this.renderButton()}
            </form>
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    user: state.auth.userID
  }
}
export default connect(mapStateToProps, {createPost})(PostModal)
