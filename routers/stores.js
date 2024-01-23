const express = require('express')
const { getStores, addStores } = require("../models/Stores")
const router = express.Router();

router.get("/", getStores);
router.post("/", addStores);

module.exports = router;