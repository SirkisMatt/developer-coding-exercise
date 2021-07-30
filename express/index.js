const express = require("express");
const { getTopWords } = require("./utils/tags");
const cors = require("cors");
const app = express();
const rootPostDir = "./server/assets/posts";

app.use(cors());

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
app.get("/post/:slug", function (req, res) {
  // ... fill in your own code ...
});

/**
 * Returns a json array of all posts, formatted as:
 * [
 *  {
 *    title: <article's title>,
 *    slug: <article's slug>
 *  },
 *  ...
 * ]
 */
app.get("/posts", function (req, res) {
  res.send("Hello World");
  // ... fill in you own code ...
});

app.listen(8000, function () {
  console.log("Dev app listening on port 8000!");
});

module.exports = app;
