const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    id: { type: String },
    title: { type: String },
    content: { type: String },
    DName:{
        type:String
    },
    Ddet:{
        type:String
    },
    DArticle:{
        type:String
    },
    CommentList:{
        type:[String]
    },
    inputValue:{
        type:String
    }
})
module.exports = Detail = mongoose.model("detail", detailSchema)