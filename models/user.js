const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thought');

// Schema to create user model
const userSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [thoughtSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const user = model('user', userSchema);

module.exports = user;
