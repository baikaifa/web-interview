const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const RecommendSchema = new Schema({
    id:{
        type:String
    },
    date: {
        type: Date,
        default: Date.now
    },
    imgUrl:{
        type:String
    }
})
module.exports = RecommendList = mongoose.model("recommendList", RecommendSchema)