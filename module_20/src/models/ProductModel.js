const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    decription: { type: String },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    imageURL: { type: String },
},
    { timestamps: true, versionKey: false });

const ProductModel = mongoose.model("products", DataSchema);
module.exports = ProductModel;