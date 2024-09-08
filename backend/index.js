const express = require("express");
const app = express();
const cors = require("cors");
const handler = require("./db");
require("dotenv").config();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  res.json({ name: "vikas" });
});

app.get("/invoices", handler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
