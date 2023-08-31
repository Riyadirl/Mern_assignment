const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const DataSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
},
    { timestamps: true, versionKey: false });

DataSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);

    next();
});

const UserModel = mongoose.model("user", DataSchema);
module.exports = UserModel;