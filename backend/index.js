require("dotenv").config({ quiet: true });
const express = require("express");
const mongoose = require("mongoose");
const Position = require("./models/positions");
const Holding = require("./models/holdings");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4040;
const url = process.env.MONGO_URL;

// Middleware
app.use(express.json());
app.use(bodyParser.json()); // FIXED
app.use(cors());

// Routes
app.get("/positions", async (req, res) => {
  try {
    let allPositions = await Position.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("❌ Error fetching positions:", err);
    res.status(500).send("Error fetching positions");
  }
});

app.get("/holdings", async (req, res) => {
  try {
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("❌ Error fetching Holdings:", err);
    res.status(500).send("Error fetching Holdings");
  }
});

// Start server
mongoose
  .connect(url)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 App started on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
