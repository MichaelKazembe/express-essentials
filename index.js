const express = require("express");
const data = require("./data/mock.json");

const app = express();
const PORT = 3000;

// GET METHOD
app.get("/", (request, response) => {
  response.send("This is a GET request as /");
});

// POST METHOD
app.post("/create", (request, response) => {
  response.send("This is a POST request at /create");
});

// PUT METHOD
app.put("/edit", (request, response) => {
  response.send("This is a PUT request at /edit");
});

// DELETE METHOD
app.delete("/delete", (request, response) => {
  response.send("This is a DELETE request at /delete");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
  console.log(data);
});
