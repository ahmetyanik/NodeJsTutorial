const express = require("express");
const userRouter = require("./router/user_router");
const productRouter = require("./router/product_router");
const dotenv = require('dotenv/config');
const { MongoClient } = require("mongodb");


const uri = `mongodb+srv://ahmetyank4242:${process.env['DB_PASSWORD']}@cluster0.ve6bnfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri,{
    useNewUrlParser:true,useUnifiedTopology:true
});

client.connect(async err=>{
    console.log('Connected DB');
})


const app = express();

app.use("/",userRouter);
app.use("/",productRouter);

app.get("/", async(req,res)=>{

    const collection = client.db("talrise").collection("deneme");

    const result = await collection.insertOne({message:"merhaba"});

    console.log(result);

    res.send("Hier ist " + req.url + " page...")
})


app.listen(3000,()=>{
    console.log("3000 calisiyor...");
})