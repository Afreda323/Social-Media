const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const bcrypt = require('bcrypt');
const Post = require('./Post');

const userSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    bio: {
        type: String,
        required: true,
        default: "This user doesn't have a bio"
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://i.redd.it/0x4bejtshuhx.png'
    },
    posts: [Post]
});

userSchema.pre('save', function(next){
    let user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
       if(err){ return console.error(error); }
       user.password = hash;
       next();
    });
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if(err){return callback(err)}
    callback(null, isMatch);
  })
}

const User = mongoose.model('user', userSchema);

module.exports = User;