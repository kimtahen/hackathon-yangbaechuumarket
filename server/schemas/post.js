const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id: {type: Number},
    title: {type:String},
    img: {type: String},
    location: {type: String},
    purchaseDate: {type: String},
    deadline: {type: String},
    timeStamp: {type: Date, default: Date.now},
    comments : {type: mongoose.Schema.Types.ObjectId, ref:'comment'}
})

module.exports = mongoose.model('Post', postSchema)