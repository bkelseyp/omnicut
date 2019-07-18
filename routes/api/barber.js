const router = require("express").Router();
const barberController = require("../../controllers/barberController");

// Matches with "/api/barber"
router.route("/")
  .get(barberController.findAll)
  .post(barberController.create);

// Matches with "/api/barber/:id"
router
  .route("/:id")
  .get(barberController.findById)
  .put(barberController.update)
  .delete(barberController.remove);

module.exports = router;
