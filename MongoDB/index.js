const express = require("express");
require("dotenv/config");
const {MongoClient} = require("mongodb");

const app = express();
app.use(express.json());

const uri = `mongodb+srv://ahmetyank4242:${process.env.DB_PASSWORD}@cluster0.azge9ng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const user = client.db("okul").collection("user");
const students = client.db("okul").collection("students");

client.connect(async err=>{
    console.log('Connected to DB');
})


app.get("/",(req,res)=>{

    res.json({
        success:true,
        message:"anasayfa"
    })
})

app.post("/user", async (req,res)=>{

    console.log(req.body);

    const {ad,soyad} = req.body;

    const result = await user.insertOne({ad:ad,soyad:soyad});


    res.json(result);


})


app.post("/students", async (req,res)=>{

    console.log(req.body);

    const {ad,soyad,no} = req.body;

    const result = await students.insertOne({ad:ad,soyad:soyad,no:no});

    res.json(result);


})







app.listen(3000,()=>{
    console.log("3000 calisiyor...");
})