const express = require('express')
const { getCars, addCars,updateCars,deleteCars } = require("../models/Cars")
const router = express.Router();


router.get("/", getCars);
router.post("/", addCars);
router.post("/", updateCars);
router.post("/", deleteCars);

module.exports = router;