const express = require('express')
const { getBooking , addBooking, updateBooking ,deleteBooking} = require("../models/Booking")
const router = express.Router();


router.get("/", getBooking);
router.post("/", addBooking);
router.put("/update/:id", updateBooking);
router.delete("/delete/:id", deleteBooking);

module.exports = router;