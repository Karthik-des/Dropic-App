const prisma = require("../config/db");

// Get all rides
exports.getRides = async (req, res) => {
  try {
    const rides = await prisma.ride.findMany({
      include: { user: true },
    });
    res.json(rides);
  } catch (error) {
    res.status(500).json({ error: "Error fetching rides" });
  }
};

// Create a ride
exports.createRide = async (req, res) => {
  const { origin, destination, price } = req.body;

  try {
    const ride = await prisma.ride.create({
      data: {
        origin,
        destination,
        price,
        userId: req.user.id, // from JWT
      },
    });
    res.json(ride);
  } catch (error) {
    res.status(500).json({ error: "Error creating ride" });
  }
};
