const mongoose = require("mongoose");

const { Schema } = mongoose;

const booksSchema = new Schema(
  {
    Title: {
      type: "string",
      trim: true,
      required: true,
    },
    Author: {
      type: "string",
      trim: true,
      required: true,
    },
    Description: {
      type: "string",
      trim: true,
    },
    PublishedYear: {
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

const books = mongoose.model("books", booksSchema);
module.exports = books;
