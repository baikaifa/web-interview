const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const LoadMoreSchema = new Schema({
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
    id:{
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
    }
})
module.exports = LoadMore = mongoose.model("loadMore", LoadMoreSchema)