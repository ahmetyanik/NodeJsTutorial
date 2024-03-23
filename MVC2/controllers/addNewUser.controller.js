
const User = require("../models/User.model");

 module.exports =  addNewUser = ("/addUser",async(req,res)=>{

    console.log(req.body);

    await User.create(req.body);

    res.json(req.body)

})

