const express = require("express");
const router = express.Router();

router.get("/users", (req,res)=>{
    res.send("Users sayfasi Url'i:" + req.url)
})

router.get("/users/:name", (req,res)=>{
    res.send("Users sayfasi parametreli Url'i:" + req.url)
})

module.exports = router;