const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const productsFilterSchema = new mongoose.Schema({
    _id: ObjectId,
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = ProductsFilters = mongoose.model('products_filter' , productsFilterSchema);