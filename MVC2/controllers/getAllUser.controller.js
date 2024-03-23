
const User = require("../models/User.model");

module.exports =  getAllUsers = ("/getAllUsers",async(req,res)=>{

   console.log("deneme");

   const result = await User.find({});

    res.json(result);

})


