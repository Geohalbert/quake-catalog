const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const quakeRouter = require("./routes/quake-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", quakeRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
