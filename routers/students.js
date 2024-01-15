const express = require('express')
const { getStudents, addStudents } = require("../models/students")
const router = express.Router();

router.get("/", getStudents);
router.post("/", addStudents);

module.exports = router;