const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create booking request
router.post("/", async (req, res) => {
  try {
    const booking = await prisma.booking.create({
      data: {
        userName: req.body.userName,
        driverId: req.body.driverId,
        fromAddress: req.body.fromAddress,
        toAddress: req.body.toAddress,
        addAddress: req.body.addAddress || "",
        dropAddress: req.body.dropAddress || "",
        mainPassengers: parseInt(req.body.mainPassengers),
        addPassengers: parseInt(req.body.addPassengers),
        dropPassengers: parseInt(req.body.dropPassengers),
        totalSeats: parseInt(req.body.totalSeats),
        totalCost: parseFloat(req.body.totalCost),
        totalDistance: req.body.totalDistance,
        duration: req.body.duration,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
      },
    });
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Booking creation failed" });
  }
});

// Driver: get all bookings for him
router.get("/driver/:driverId", async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { driverId: parseInt(req.params.driverId) },
      orderBy: { createdAt: "desc" },
    });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch driver bookings" });
  }
});

// Update booking status (accept/reject)
router.put("/:id", async (req, res) => {
  try {
    const updated = await prisma.booking.update({
      where: { id: parseInt(req.params.id) },
      data: { status: req.body.status },
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update booking" });
  }
});

module.exports = router;
