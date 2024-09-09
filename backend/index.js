const express = require("express");
const app = express();
const cors = require("cors");
const registerDepartment = require("./db");
const bodyParse = require("body-parser");

require("dotenv").config();
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

// Routes
app.get("/", async (req, res) => {
  res.json({ name: "vikas" });
});

app.post("/register", registerDepartment);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
