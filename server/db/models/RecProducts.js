const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const recProductsSchema = new mongoose.Schema({
    _id: ObjectId,
    product_link:{ 
        type: ObjectId,
        required: true,
        ref:'products' 
    },
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = RecProducts = mongoose.model('rec_products', recProductsSchema);