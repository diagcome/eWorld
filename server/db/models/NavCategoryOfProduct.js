const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const navCategoryOfProductSchema = new mongoose.Schema({
    _id: ObjectId,
    name: {
        type:String,
        required: true
    },
    categoryFilter: Object,
    lvl: Number,
    parent:{
        type: ObjectId,
        ref: "nav_category_of_products"
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = NavCategoryOfProduct = mongoose.model('nav_category_of_products', navCategoryOfProductSchema);
