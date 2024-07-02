const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World! We are live at port 3000" });
});

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Charlie" },
  { id: 6, name: "David" },
  { id: 7, name: "Eve" },
  { id: 8, name: "Frank" },
  { id: 9, name: "Grace" },
  { id: 10, name: "Hannah" },
  { id: 11, name: "Ivy" },
  { id: 12, name: "Jack" },
  { id: 13, name: "Kane" },
  { id: 14, name: "Lily" },
];

const PaginatedApi = (model) => {
  return (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.results = model.slice(startIndex, endIndex);
    res.json(results);
  };
};

app.get("/users", PaginatedApi(users));

app.listen(3000, () => {
  console.log("Server is running live on port 3000");
});
