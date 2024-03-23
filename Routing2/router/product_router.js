const express = require("express");
const router = express.Router();

router.get("/products/:name", (req,res)=>{
    res.send("Products sayfasi parametreli Url'i:" + req.url)
})

module.exports = router;