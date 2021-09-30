require("dotenv").config();
const path = require("path");
const cors = require("cors");

console.log(process.argv[2]);
console.log(process.env.USER);

const express = require("express");

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build"))); //needs absolute path to build folder inside client

server.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: Leo }]);
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
