// Import required Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema named ProductSchema
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// Create a Mongoose model named Product using the defined schema
const Product = mongoose.model('Product', ProductSchema);

// Export the Product model for use in other parts of your application
module.exports = Product;
