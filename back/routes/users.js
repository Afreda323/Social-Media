var express = require('express');
var router = express.Router();


// TODO: Get a User
// Get /user/:id
// Recieve User ID
// Send User data, with posts object

router.get('/:userID', (req, res) => {
  const ID = req.params.userID
  res.json({user: user})
})
//=========================

// TODO: Get Blocked Users
// Get /user/blocked
// Recieve User ID
// Send List of blocked users
router.get('/blocked', (req, res) => {

})
//=========================

// TODO: Block a User
// POST /user/block/who to block
// Recieve User ID, Blocked User ID
// Send Confirmation
router.post('/block/:blockedID', (req, res) => {

})
//=========================

// TODO: Unblock a User
// POST /user/unblock/who to unblock
// Recieve User ID, Unblocking User ID
// Send Confirmation
router.post('/unblock/:blockedID', (req, res) => {

})

//=========================

// TODO: Edit First Name
// Put /user/fname
// Recieve User ID, New First Name
// Send Confirmation
router.put('/fname', (req, res) => {

})
//=========================

// TODO: Edit First Name
// Put /user/lname
// Recieve User ID, New Last Name
// Send Confirmation
router.put('/lname', (req, res) => {

})
//=========================

// TODO: Edit Email
// Put /user/email
// Recieve User ID, New Email
// Send Confirmation
router.put('/email', (req, res) => {

})
//=========================

// TODO: Edit Password
// Put /user/password
// Recieve User ID, Old Password, New Password
// Verify
// Send Confirmation
router.put('/password', (req, res) => {

})
//=========================

// TODO: Edit Bio
// Put /user/bio
// Recieve User ID, New Bio
// Send Confirmation
router.put('/bio', (req, res) => {

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
const user = {
  id: 0,
  name: {
    first: 'Jimmy',
    last: 'Jon'
  },
  bio: 'Hey my name is JIM johnz, and I am a frog. Some say I look like Dolan Trump.',
  posts: [post]
}
