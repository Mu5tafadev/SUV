const express = require('express')
const { register, login, getusers, updateuser,deleteuser } = require('../models/users');
const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/", getusers);
router.put("/update/:id",updateuser );
router.delete("/delete/:id", deleteuser);
module.exports = router;