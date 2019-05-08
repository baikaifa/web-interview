const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const ProfileSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    title:{
        type:String
    },
    imgUrl:{
        type:String
    },
    desc:{
        type:String
    }
})
module.exports = Profile = mongoose.model("profile", ProfileSchema)