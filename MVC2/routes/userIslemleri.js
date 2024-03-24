var express = require('express');
var router = express.Router();

const {addNewUser,getAllUsers,getUserByName, getUserById} = require("../controllers/user.controller");

router.get("/getAllUsers",getAllUsers);
router.get("/getUserByName/:name",getUserByName);
router.post("/addUser", addNewUser);
router.get("/getUserById/:id", getUserById )


module.exports = router;