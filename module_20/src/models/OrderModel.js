const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
            quantity: { type: Number, required: true, min: 1 }
        }
    ],
    totalAmount: { type: Number, required: true, min: 0 },
    shippingAddress: { type: String, required: true },
    status: { type: String, required: true, default: 'pending' }

},
    { timestamps: true, versionKey: false })

const OrderModel = mongoose.model('orders', DataSchema);
module.exports = OrderModel;