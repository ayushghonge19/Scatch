const mongoose = require('mongoose');
const { isValidElement } = require('react');
mongoose.connect("mongodb://127.0.0.1:27017:Scatch");

const UserSchema = mongoose.Schema({
    fullname : {
        type:String,
        trim:true,
        minLength:3,
    },
    email : String,
    password : String,
    cart : {
        type : Array,
        default:[]
    },
    isadmin : Boolean,
    orders :{
        type:Array,
        default:[]
    },
    contact : Number,
    picture : String,
})

module.exports = mongoose.module("user" , UserSchema);