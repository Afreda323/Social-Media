const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const bcrypt = require('bcrypt');
var ObjectId = mongoose.Schema.Types.ObjectId;

const replySchema = new Schema({
    reply: {
        type: String,
        required: true
    },
    user: {
        id: ObjectId,
        name: {
            first: String,
            last: String
        }
    }
});

const postSchema = new Schema({
  date: {
    type: Number,
    default: new Date().getTime() / 1000
  },
  zip: {
      type: Number,
      required: true
  },
  votes: {
    ups: [ObjectId],
    downs: [ObjectId]
  },
  post: {
      type: String,
      required: true
  },
  replies: [replySchema]
});

module.exports = postSchema;