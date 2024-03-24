var express = require('express');
var router = express.Router();

const {addNewProduct} = require("../controllers/product.controller");


router.post("/addProduct", addNewProduct);



module.exports = router;