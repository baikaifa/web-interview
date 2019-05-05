const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    data: {
        topicList: [{
            id: { type: String },
            title: { type: String },
            content: { type: String }
        }],
        articleList: [{
            id: { type: String },
            title: { type: String },
            content: { type: String }
        }],
        recommendList:[{
            id: { type: String },
            title: { type: String },
            content: { type: String }
        }],
    }
})
module.exports = Home = mongoose.model("home", homeSchema)