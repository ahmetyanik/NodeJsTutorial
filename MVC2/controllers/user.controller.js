
const User = require("../models/User.model");

const  addNewUser = ("/addUser",async(req,res)=>{

    console.log(req.body);

    await User.create(req.body);

    res.json(req.body)

})

const getUserByName = ("/getUserByName/:name",async(req,res)=>{

    const name = req.params.name;
 
    const result = await User.find({name});
 
     res.json(result);
 
 })

const getAllUsers = ("/getAllUsers",async(req,res)=>{

 
    const result = await User.find({});
 
     res.json(result);
 
 })

 const getUserById = ("/getUserById/:id", async(req, res) => {
    const id = req.params.id;

    const result = await User.find({id});

    res.json(result)
 })

 module.exports = {addNewUser,getAllUsers,getUserByName, getUserById}