
const Product = require("../models/Product.model");

const  addNewProduct = ("/addProduct",async(req,res)=>{

    console.log(req.body);

    await Product.create(req.body);

    res.json(req.body)

})



 module.exports = {addNewProduct}