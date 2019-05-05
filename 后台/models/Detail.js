const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    data: {
                id: { type: String },
                title: { type: String },
                content: { type: String }
    }
})
module.exports = Detail = mongoose.model("detail", detailSchema)