import axios from 'axios';
export function forgot(email) {
  return dispatch => {
    axios
      .post('http://localhost:3001/auth/forgot', {
        email: email
      })
      .then(res => {
        setLocal();
        console.log(res);
        dispatch({type: 'FORGOT_SUCCESS'});
      })
      .catch(error => {
        console.log(error);
      });
  };
}
const setLocal = (id, token) => {
  localStorage.setItem('logged', true);
  localStorage.setItem('token', token);
  localStorage.setItem('userId', id);
};
export function login(email, password) {
  return dispatch => {
    axios
      .post('http://localhost:3001/auth', {
        email: email,
        password: password
      })
      .then(res => {
        console.log(res);
        setLocal(res.data.userID, res.data.token);
        dispatch({type: 'LOGIN_SUCCESS', userID: res.data.userID});
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function signup(email, password, fName, lName) {
  return dispatch => {
    axios
      .post('http://localhost:3001/auth/signup', {
        email: email,
        password: password,
        fName: fName,
        lName: lName
      })
      .then(res => {
        setLocal(res.data.userID, res.data.token);
        console.log(res);
        dispatch({type: 'SIGNUP_SUCCESS', userID: res.data.userID});
      })
      .catch(error => {
        console.log(error);
        alert('Something Went Wrong, you may already have an account')
      });
  };
}
export function logout() {
  return {
    type: 'LOGOUT_SUCCESS'
  };
}
export function createPost(post, user, cb) {
  return dispatch => {
    axios
      .post('http://localhost:3001/feed', {
        user: user,
        post: post
      })
      .then(res => {
        console.log(res);
        cb();
        dispatch({type: 'POST_SUCCESS'});
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function deletePost(postID, userID, cb) {
  return dispatch => {
    axios
      .delete('http://localhost:3001/feed', {
        post: postID,
        user: userID
      })
      .then(res => {
        console.log(res);
        cb();
        dispatch({type: 'DELETE_SUCCESS'});
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function voteUp(userID, postID) {
  return dispatch => {
    axios
      .post('http://localhost:3001/feed/' + postID + '/up', {
        userID: userID
      })
      .then(res => {
        console.log(res);
        dispatch({type: 'VOTE_UP'});
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function voteDown(userID, postID) {
  return dispatch => {
    axios
      .post('http://localhost:3001/feed/' + postID + '/down', {
        userID: userID
      })
      .then(res => {
        console.log(res);
        dispatch({type: 'VOTE_DOWN'});
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function sendReply(userID, postID, reply, cb) {
  return dispatch => {
    axios
      .post('http://localhost:3001/feed/' + postID, {
        post: postID,
        user: userID,
        reply: reply
      })
      .then(res => {
        console.log(res);
        cb();
        dispatch({type: 'REPLY_SUCCESS'});
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function sendMessage(messageID, text) {
  console.log('message sent: ' + messageID + ' ' + text);
  return {
    type: 'SEND_MESSAGE'
  };
}

export function getLocation(zip) {
  return {
    type: 'GOT_LOCATION',
    payload: zip
  };
}
