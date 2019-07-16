const path = require('path');
const router = require("express").Router();
const appointmentRoutes = require("./appointment");
const availabilityRoutes = require("./availability");
const barberRoutes = require("./barber");

// routes
router.use("/appointment", appointmentRoutes);
router.use("/availability", availabilityRoutes);
router.use("/barber", barberRoutes);

// // Book routes
// router.use("/books", bookRoutes);

module.exports = router;
