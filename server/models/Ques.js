const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuesSchema = new Schema({
    question:{
        type:String,
        required:true
    },
    ans:{
        type:String,
        required:true
    }
})

module.exports = QuesSchema;