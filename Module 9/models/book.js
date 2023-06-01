const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

const bookSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  description: String,
  publishedYear: Number,
});

const Book = mongoose.model("Book", bookSchema);
