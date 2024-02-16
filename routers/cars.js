const express = require('express')
const { getCars,addCars,updateCars,deleteCars } = require("../models/Cars")
const router = express.Router();


router.get("/", getCars);
router.post("/", addCars);
router.put("/update/:id", updateCars);
router.delete("/delete/:id", deleteCars);

module.exports = router;