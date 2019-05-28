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
<<<<<<< HEAD
    DArticle:{
        type:String
<<<<<<< HEAD
=======
=======
    Comment:{
        type:Number
>>>>>>> 520b452e032e427a444a6b7edf362b5f16833a05
    },
    CommentList:{
        type:Array
    },
    inputValue:{
        type:String
>>>>>>> 2d8fc8150ed21d9552d8ae5e3fe3a5db8f07a968
    }
})
module.exports = ArticleList = mongoose.model("articleList", ArticleListSchema)