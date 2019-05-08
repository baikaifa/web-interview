const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    data: {
        topicList: [{
            _id: { type: String },
            id: { type: String },
            title: { type: String },
            date: {
                type: Date,
                default: Date.now
            },
            __v: { type: String },
            content: { type: String }
        }],
        articleList: [{
            _id: { type: String },
            id: { type: String },
            title: { type: String },
            imgUrl: { type: String }
        }],
        recommendList: [{
            _id: { type: String },
            id: { type: String },
            imgUrl: { type: String },
            title: { type: String },
            content: { type: String },
            __v: { type: String },
        }],
    },
    success: Boolean
})
module.exports = Home = mongoose.model("home", homeSchema)