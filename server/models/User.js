const mongoose = require('mongoose');
const {users,levels} = require('../connections/connections');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
<<<<<<< HEAD
=======
    level1:{
        type:Number,
        default:0
    },
    level2:{
        type:Number,
        default:0
    },
    level3:{
        type:Number,
        default:0
    },
    level4:{
        type:Number,
        default:0
    },
    level5:{
        type:Number,
        default:0
    },
    level6:{
        type:Number,
        default:0
    },
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = User = users.model("users",UserSchema);