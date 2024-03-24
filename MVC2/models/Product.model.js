const mongoose = require('mongoose');
require("dotenv/config");
const {model,Schema} = mongoose;

const databaseUri = `mongodb+srv://ahmetyank4242:${process.env.DB_PASSWORD}@cluster0.azge9ng.mongodb.net/okul?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(databaseUri).then(res=>console.log("Database'e baglandi..")).catch(err=>console.log(err));

const productSchema = new Schema({
    id:{
        required:true,
        type:Number
    },
    name:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
})


const Product = model("product",productSchema);

module.exports = Product;