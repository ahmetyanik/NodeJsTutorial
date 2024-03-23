var express = require('express');
var router = express.Router();
const addNewUser = require("../controllers/addNewUser.controller")
const getAllUsers = require("../controllers/getAllUser.controller")

router.get("/getAllUsers",getAllUsers);
router.post("/addUser", addNewUser);

module.exports = router;