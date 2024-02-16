const express = require('express')
const { register, login, getusers, updateuser } = require('../models/users');
const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/", getusers);
router.put("/update/:id",updateuser );
module.exports = router;