const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
    quantity: { type: Number, required: true, min: 1 }
},
    { timestamps: true, versionKey: false })

const CartItemModel = mongoose.model('cartItems', DataSchema);
module.exports = CartItemModel;