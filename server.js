const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello from Node behind nginx!"));

app.listen(3000, () => console.log("Node on 3000"));