const { Schema, model } = require('mongoose');
const reactionSchema = require ('./Reactions')

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlenght: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) => new Date(timeStamp).toLocaleString()
  
    },
    userName: {
      type: String,
      // Sets a default value of 12 weeks from now
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
