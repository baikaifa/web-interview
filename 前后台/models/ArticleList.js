const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const ArticleListSchema = new Schema({
    id:{
        type:String
    },
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
    },
    Like:{
        type:Number
    },
    Comment:{
        type:Number
    },
    CommentList:{
        type:Array
    },
    inputValue:{
        type:String
    }
})
module.exports = ArticleList = mongoose.model("articleList", ArticleListSchema)