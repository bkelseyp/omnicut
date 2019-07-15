const router = require("express").Router();
const availabilitiesController = require("../../controllers/availabilitiesController");

// Matches with "/api/availability"
router.route("/")
  .get(availabilitiesController.findAll)
  .post(availabilitiesController.create);

// Matches with "/api/availability/:id"
router
  .route("/:id")
  .get(availabilitiesController.findById)
  .put(availabilitiesController.update)
  .delete(availabilitiesController.remove);

module.exports = router;
