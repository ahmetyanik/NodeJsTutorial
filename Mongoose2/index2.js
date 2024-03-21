const express = require("express");
const app = express();
require("dotenv/config");
const mongoose = require('mongoose');
const {model,Schema} = mongoose;
app.use(express.json());

const databaseUri = `mongodb+srv://ahmetyank4242:${process.env.DB_PASSWORD}@cluster0.azge9ng.mongodb.net/okul?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(databaseUri).then(res=>console.log("Database'e baglandi..")).catch(err=>console.log(err));


const userSchema = new Schema({
    ad:{
        type:String,
        required:true
    },

    soyad:{
        type:String
    },

    password:{
        type:Number
    },

    maas:{
        type:Number
    }
})

const User = model("user",userSchema);


app.post("/adduser",async(req,res)=>{

    console.log(req.body);

    await User.create(req.body);

    res.json(req.body)

})



app.listen(3000,()=>{
    console.log(3000 + " calisiyor...");
})