const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const Post = require('./Post');

const postsSchema = new Schema({
    posts: [Post]
});


const Posts = mongoose.model('user', postsSchema);

module.exports = Posts;