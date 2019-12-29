const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id: {type: Number},
    title: {type:String},
    item: {type:String},
    deadline: {type: String},
    location: {type: String},
    totalEntry: {type: Number},
    desc: {type: String},
    img: {type: String},
    timeStamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Post', postSchema)