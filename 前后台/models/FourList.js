const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const FourListSchema = new Schema({
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
})
module.exports = FourList = mongoose.model("fourList", FourListSchema);