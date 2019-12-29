const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    id: {type:Number},
    postid: {type:Number},
    nickname: {type:String},
    contents: {type:String},
    timeStamp: {type: Date, default: Date.now}

})

module.exports = mongoose.model('Comment', commentSchema)