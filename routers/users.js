const express = require('express')
const { register, login,getusers,adduser,deleteuser,updateuser } = require('../models/users');
const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/", getusers);
router.post("/", adduser);
router.post("/", deleteuser);
 router.post("/",updateuser );
module.exports = router;