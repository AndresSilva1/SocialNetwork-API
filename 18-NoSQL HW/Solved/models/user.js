const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            max_length: 50,
            unique: true,
            match: [/\w+@\w+.\w{2+3}+,'invalid email address'],
      },

        github: {
            type: String,
            required: true,
            max_length: 50,
        },
        assignments: [assignmentSchema],
    },
    thoughts: [
    {
        type: Schema.Types.ObjectID,
        ref: "thought",
    }
],
    friends: [
    {
        type: Schema.Types.ObjectID,
        ref: "user",
    }
],
    {
        toJSON: {
            virtual: true,
        },
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friend.length
})
const Student = model('student', studentSchema);

module.exports = Student;
