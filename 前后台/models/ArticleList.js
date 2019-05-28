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
    DName:{
        type:String
    },
    Ddet:{
        type:String
    },
    DArticle:{
        type:String
<<<<<<< HEAD
=======
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