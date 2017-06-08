import React from 'react';
import {connect} from 'react-redux';
import {voteDown, voteUp} from '../actions';
class Votes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      originalVotes: this.props.votes.total,
      votes: this.props.votes.total
    };
  }
  renderUp() {
    if (
      this.state.originalVotes < this.state.votes 
      // ||
      // this.props.votes.ups.includes(this.props.user)
    ) {
      return (
        <button disabled={true} className="up disabled">
          <span title="Vote Up" className="ion-thumbsup icon" />
        </button>
      );
    } else {
      return (
        <button onClick={this.handleVoteUp.bind(this)} className="up">
          <span title="Vote Up" className="ion-thumbsup icon" />
        </button>
      );
    }
  }
  renderDown() {
    if (
      this.state.originalVotes > this.state.votes 
      // ||
      // this.props.votes.downs.includes(this.props.user)
    ) {
      return (
        <button disabled={true} className="down disabled">
          <span title="Vote Down" className="ion-thumbsdown icon" />
        </button>
      );
    } else {
      return (
        <button onClick={this.handleVoteDown.bind(this)} className="down">
          <span title="Vote Down" className="ion-thumbsdown icon" />
        </button>
      );
    }
  }
  handleVoteUp() {
    console.log(this.props);
    this.setState(
      {
        votes: this.state.votes + 1
      },
      () => {
        this.props.voteUp(this.props.user, this.state.id);
      }
    );
  }
  handleVoteDown() {
    this.setState(
      {
        votes: this.state.votes - 1
      },
      () => {
        this.props.voteDown(this.props.user, this.state.id);
      }
    );
  }
  render() {
    return (
      <div className="post-votes col-sm-2">
        {this.renderUp()}
        <span className="votes">
          {this.state.votes}
        </span>
        {this.renderDown()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.auth.userID
  };
}
export default connect(mapStateToProps, {voteDown, voteUp})(Votes);
