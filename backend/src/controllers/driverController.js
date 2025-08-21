const prisma = require("../config/db");

exports.getDrivers = async (req, res) => {
  try {
    const drivers = await prisma.driver.findMany();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: "Error fetching drivers" });
  }
};
