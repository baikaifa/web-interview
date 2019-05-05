const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const TopicListSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    title:{
        type:String
    },
    imgUrl:{
        type:String
    }
})
module.exports = TopicList = mongoose.model("topicList", TopicListSchema)