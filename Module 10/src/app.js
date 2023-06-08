const express = require('express');
const mongoose = require('mongoose');
const productsRouter = require('./routes/products');

const app = express();

// Import other required modules or middleware
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());
app.use(mongoose());
app.use(rateLimit());


mongoose.connect('mongodb://localhost:27017/practice1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose
    .connect(URI, options)
    .then(() => {
        console.log("Successfully connected");
    })
    .catch((error) => {
        console.error("Error", error);
    });


app.use("/api/v1", router);


app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "Not found" });
});

module.exports = app;
