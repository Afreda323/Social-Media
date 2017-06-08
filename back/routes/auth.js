var express = require('express');
var router = express.Router();
let User = require('../models/User')
let control = require('../controllers/auth')
const passportService = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireLogin = passport.authenticate('local', {session: false})



// TODO: Sign Up a User
// POST /auth/signup
// Recieve Name, Email, Password, Bio, IMG
// Send Token, User ID
router.post('/signup', control.signup)
//=========================

// TODO: Log In User
// POST /auth
// Recieve Email, Password
// Send Token, User ID
router.post('/', requireLogin, control.login)
//=========================

// TODO: Forgot Password
// POST /auth/forgot
// Recieve User ID, Email
// Send Email
// Gotta figure this out
router.post('/forgot', (req, res) => {
  const email = req.body.email;
  res.json({
    "success": true,
  })
})
module.exports = router;
