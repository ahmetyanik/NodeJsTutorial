const express = require("express");
require("dotenv/config");
const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const app = express();
app.use(express.json());

const uri = `mongodb+srv://ahmetyank4242:${process.env.DB_PASSWORD}@cluster0.azge9ng.mongodb.net/deneme?retryWrites=true&w=majority&appName=Cluster0`


mongoose.connect(uri);

const userSchema = new Schema({
    ad:{
        type:String
    },
    yas:{
        type:Number
    },
    dogumTarihi:{
        type:Date
    }
});

const User = model("user",userSchema);


app.get("/",(req,res)=>{

    res.json({
        success:true,
        message:"anasayfa"
    })
})

app.get("/users",async (req,res)=>{

    const allUsers = await User.find({yas:{$gt:19}});

    res.json(allUsers)
})

app.post("/user", async (req,res)=>{

    const result = await User.create(req.body);


    res.json(result);


})

app.delete("/user", async (req,res)=>{

    const result = await User.find({ad:"fatih456"});

    await User.deleteMany({});


    res.json(result);


})


app.post("/students", async (req,res)=>{

    console.log(req.body);

    const {ad,soyad,no} = req.body;

    const result = "";

    res.json(result);


})







app.listen(3000,()=>{
    console.log("3000 calisiyor...");
})