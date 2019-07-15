const path = require("path");
const router = require("express").Router();
const appointmentRoutes = require("./appointment");
const availabilityRoutes = require("./availability");
const barberRoutes = require("./barber");

// routes
router.use("/appointment", appointmentRoutes);
router.use("/availability", availabilityRoutes);
router.use("/barber", barberRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;