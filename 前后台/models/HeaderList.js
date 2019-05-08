const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const headerListSchema=new Schema({
    data:{
        type:Array,
        required:true
    }
})
module.exports= HeaderList =mongoose.model("headerlist",headerListSchema)