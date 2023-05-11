const express = require("express");
const app = express();
app.use(express.json());

let books = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author, publishedDate } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const id = generateUniqueId();
  const book = { id, title, author, publishedDate };
  books.push(book);
  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;

  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Not found" });
  }

  const deletedBook = books.splice(index, 1)[0];

  res.json({ message: "Deleted successfully" });
});

app.listen(3000, () => {
  console.log("Port 3000");
});
