const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const adminModel = model("usersAdmin", userSchema)

module.exports =  adminModel