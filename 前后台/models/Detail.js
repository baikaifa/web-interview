const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    id: { type: String },
    title: { type: String },
    img:{
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
    },
    CommentList:{
        type:Array
    },
    inputValue:{
        type:String
    }
})
module.exports = Detail = mongoose.model("detail", detailSchema)