const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/routes.js");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use("/api/v1/", router);

const port = process.env.PORT || 5050;

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  })
  .catch((err) => console.log(err));
