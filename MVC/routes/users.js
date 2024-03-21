var express = require('express');
const getUsers = require('../controllers/user.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
