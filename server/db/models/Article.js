const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new mongoose.Schema({
    _id: ObjectId,
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],

    date:{
        type:Date,
        default:Date.now()
    }

},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = Article = mongoose.model('articles', articleSchema,"articles");