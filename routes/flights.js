const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights");

// GET /flights (index functionality)
router.get("/", flightsCtrl.index);
// GET /flights/new (new functionality)
router.get("/new", flightsCtrl.new);
// GET /flights/:id (show functionality)
// router.get("/:id", flightsCtrl.show);
// POST /flights (create functionality)
router.post("/", flightsCtrl.create);

module.exports = router;
