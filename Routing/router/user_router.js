const express = require("express");
const router = express.Router();

router.get("/user", (req,res)=>{

    res.send("Hier ist " + req.url + " page...")
})

router.get("/user/:name", (req,res)=>{

    res.send("Hier ist " + req.url + " page...")
})


module.exports = router;

