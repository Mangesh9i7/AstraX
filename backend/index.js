require("dotenv").config({ quiet: true });
const express = require("express");
const mongoose = require("mongoose");
const Position = require("./models/positions");
const Holding = require("./models/holdings");
const app = express();

const PORT = process.env.PORT || 4040;
const url = process.env.MONGO_URL;

// Middleware
app.use(express.json());

// Route
app.get("/positions", async (req, res) => {
  let allPositions = await positions.find({});
  res.json(allPositions);
});

app.get("/holdings", async (req, res) => {
  try {
    let data = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
    ];

    // Use for...of with await
    for (let item of data) {
      let newHolding = new Holding(item);
      await newHolding.save();
    }
  } catch (err) {
    console.error("❌ Error saving positions:", err);
    res.status(500).send("Error saving positions");
  }
  let allHoldings = await Holdings.find({});
  res.json(allHoldings);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 App started on port ${PORT}`);

  mongoose
    .connect(url)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
});
