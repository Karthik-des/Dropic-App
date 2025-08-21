const express = require("express");
const { getRides, createRide } = require("../controllers/rideController");
const authenticate = require("../middleware/auth");

const router = express.Router();

router.get("/", authenticate, getRides);
router.post("/", authenticate, createRide);

module.exports = router;
