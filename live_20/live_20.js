const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true, min: 0 },
    stock: {
        type: Number, required: true, min: 0,
        validate: {
            validator: Number.isInteger,
            message: 'not integer'
        }
    },
    category: { type: String, required: true }
});

const ProductModel = mongoose.model('Products', DataSchema);
module.exports = ProductModel;
