require("dotenv").config({
  quiet: true,
});
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 4040;
const url = process.env.MONGO_URL;

// Middleware
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);

  mongoose
    .connect(url)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
});
