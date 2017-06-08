var express = require('express');
var router = express.Router();

// TODO: Get Posts
// GET /feed
// Recieve Posts, City and sorting method
// Send Posts from City
router.get('/', (req, res) => {
  res.json({
    posts: [post, post, post, post, post, post, post]
  })
})
//=========================

// TODO: Post a Post
// POST /feed
// Recieve User ID, Text, Time
// Send Confirmation
router.post('/', (req, res) => {
  let user = req.body.user;
  let post = req.body.post;
  res.json({user:user, post: post})
})

//=========================

// TODO: Delete a post
// DELETE /feed/:id/
// Recieve User ID, Post ID.  Verify that post belongs to user
// Send Confirmation
router.delete('/', (req, res) => {
  let user = req.body.user;
  let post = req.body.post;
  res.json({user:user, post: post})
})

//=========================

// TODO: Get a post
// GET /feed/:id
// Recieve User ID, Text, Time
// Send Confirmation
router.get('/:postID', (req, res) => {
  res.json({
    post: post
  })
})
//=========================

// TODO: Reply to post
// POST /feed/:id
// Recieve User ID, Text, Time
// Send Confirmation
router.post('/:postID', (req, res) => {
  let user = req.body.user;
  let post = req.params.postID;
  let reply = req.body.reply;
  res.json({user: Number(user), post: Number(post), reply: reply})
})
//=========================

// TODO: Vote on a post
// POST /feed/:id/:vote
// Recieve Post ID, and Voting Method (up || down)
// Send Confirmation
router.post('/:postID/:vote', (req, res) => {
  let user = req.body.userID;
  let post = req.params.postID;
  let vote = req.params.vote;
  res.json({vote: vote, user: user, post: post})
})




module.exports = router;






const post = {
  "id": 1,
  "date": new Date().getTime() / 1000,
  "votes": {
    total: 3,
    ups: [0, 1, 2],
    downs: []
  },
  "user": {
    "id": 0,
    "name": {
      "first": "Anthony",
      "last": "Freda"
    }
  },
  "post": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
  "replies": [
    {
      "reply": "I know, it's awesome.",
      "user": {
        "id": 2,
        "name": {
          "first": "Brodey",
          "last": "Newman"
        }
      }
    },
    {
      "reply": "I know, it's pretty cool.",
      "user": {
        "id": 1,
        "name": {
          "first": "Luis",
          "last": "Lopez"
        }
      }
    },
    {
      "reply": "I know, it's pretty cool.",
      "user": {
        "id": 1,
        "name": {
          "first": "Luis",
          "last": "Lopez"
        }
      }
    }
  ]
}
