const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const CartItem = require('./CartItemModel');
const Order = require('./OrderModel');

const DataSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
},
    { timestamps: true, versionKey: false });

//encrypt pass
DataSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//remove after delete
DataSchema.pre("remove", async function (next) {
    await CartItem.deleteMany({ userId: this._id });
    await Order.deleteMany({ userId: this._id });
    next();
});

const UserModel = mongoose.model("users", DataSchema);
module.exports = UserModel;