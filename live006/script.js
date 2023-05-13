const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
  
});
app.get("/users", (req, res) => {
  const users = [
    { name: "Mahbub", age: 23 },
    { name: "Chintu", age: 2 },
    { name: "Rocky", age: 2 },
  ];

  res.json(users);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
