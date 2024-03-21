const express = require("express");
const router = express.Router();

router.get("/product", (req,res)=>{

    res.send("Hier ist " + req.url + " page...")
})

router.get("/product/:name", (req,res)=>{

    res.send("Hier ist " + req.url + " page...")
})


module.exports = router;

