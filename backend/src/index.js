const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const rideRoutes = require("./routes/rideRoutes");
const driverRoutes = require("./routes/driverRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes"); // ✅ only once

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/rides", rideRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes); // ✅ using it here

// Default route
app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
