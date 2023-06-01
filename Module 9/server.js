const express = require("express");
const app = express();

const booksRouter = require("./routes/books");

app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.use("/books", booksRouter);
