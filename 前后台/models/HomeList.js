const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeListSchema = new Schema({
    data: [{
        id: { type: String },
        title: { type: String },
        content: { type: String }
    }]
})
module.exports = HomeList = mongoose.model("homeList", homeListSchema)