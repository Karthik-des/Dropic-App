const express = require("express");
const { getDrivers } = require("../controllers/driverController");

const router = express.Router();

router.get("/", getDrivers);

module.exports = router;
