const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const sliderSchema = new mongoose.Schema({
    _id: ObjectId,
    imgUrl: {
        type: String,
        required: true
    },
    // product: {
    //     type: ObjectId,
    //     ref: "phones",
    //     required: true
    // }
    product: {
        type: String,
        required: true
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = Slider = mongoose.model('slides', sliderSchema);
