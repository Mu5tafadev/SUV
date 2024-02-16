const express = require('express')
const { getStores, addStores,updateStores,deleteStores } = require("../models/Stores")
const router = express.Router();

router.get("/", getStores);
router.post("/", addStores);
router.put("/update/:id", updateStores);
router.delete("/delete/:id", deleteStores);

module.exports = router;
