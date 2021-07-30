const express = require("express");
const { getTopWords } = require("./utils/tags");
const fs = require("fs");
const cors = require("cors");
const app = express();
const rootPostDir = "../assets/posts";
const readline = require("readline");
const MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();

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
app.get("/post/:slug", async function (req, res) {
  try {
    const file = await fs.promises.readFile(
      rootPostDir + "/" + req.params.slug + ".md",
      "utf8"
    );
    const content = file.substring(file.indexOf("===\n", 1) + 4);

    const tags = getTopWords(content);

    res.status(200).json({
      post: {
        content,
        tags,
      },
    });
  } catch (err) {
    next(err);
  }

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

// Currently works for the happy path
// Not full error handling
// Needs to read meta data to check if file has the title and slug
// Check what other errors might occur.. example: if(not .md) or if files.length === 0
app.get("/posts", async function (req, res, next) {
  try {
    const files = await fs.promises.readdir(rootPostDir);
    let index = files.length;

    let posts = [];
    for (const file of files) {
      const readable = fs.createReadStream(rootPostDir + "/" + file);
      const reader = readline.createInterface({ input: readable });
      reader.on("line", (line) => {
        if (line.substring(0, 6) === "Title:") {
          posts.push({
            title: line.substring(6).trim(),
            slug: file.slice(0, -3),
          });
          reader.close();
          readable.close();
          index--;
          if (index === 0) {
            res.status(200).json(posts);
          }
        }
      });
    }
  } catch (err) {
    next(err);
  }
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    response = { message: error.message, error };
  }

  res.status(500).json(response);
});

app.listen(8000, function () {
  console.log("Dev app listening on port 8000!");
});

module.exports = app;
