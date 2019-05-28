const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const RecommendSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String
    },
    desc: {
        type: String
    },
    eyes: {
        type: String
    },
    message: {
        type: String
    },
    like: {
        type: String
    },
    imgUrl: {
        type: String
    }
})
module.exports = RecommendList = mongoose.model("recommendList", RecommendSchema)