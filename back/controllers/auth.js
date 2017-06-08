const jwt = require('jwt-simple');
const User = require('../models/User');
const config = require('../config.js');

function createToken(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fName = req.body.fName;
  const lName = req.body.lName;
  if (email && password && fName && lName) {
    User.findOne({email: email}, (err, user) => {
      if (err || user) {
        console.error(err)
        return res.status(500).send('Something broke!')
      }
      const newUser = new User({
        email: email,
        name: {
          first: fName,
          last: lName
        },
        password: password
      })
      newUser.save((err, user) => {
        if (err) {
          console.error(err)
          return res.status(500).send('Something broke!')
        }
        return res.json({token: createToken(newUser), userID: user._id})
      })
    })
  }else {
    console.error(err)
    return res.status(500).send('Something broke!')
  }
}

exports.login = function (req, res, next) {
  //Give user a token after successful login
  res.json({token: createToken(req.user)})
}