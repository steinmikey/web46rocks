require("dotenv").config();
const path = require("path");

console.log(process.argv[2]);
console.log(process.env.USER);

const express = require("express");

const server = express();
server.use(express.json());
server.use(express.static(path.join(_dirname, "client/build"))); //needs absolute path to build folder inside client

server.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client/build", "index.html"));
});

server.get("/hello", (req, res) => {
  res.send("<h1>HELLO THERE</h1>");
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
