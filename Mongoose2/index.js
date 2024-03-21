const express = require("express");
const app = express();
require("dotenv/config");
const mongoose = require('mongoose');
const {model,Schema} = mongoose;
app.use(express.json());

const databaseUri = `mongodb+srv://ahmetyank4242:${process.env.DB_PASSWORD}@cluster0.azge9ng.mongodb.net/okul?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(databaseUri).then(res=>console.log("Database'e baglandi..")).catch(err=>console.log(err));


const userSchema = new Schema({
    id:{
        type:Number
    },
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


const ogretmenlerSchema = new Schema({
    id:{
        type:Number
    },
    ad:{
        type:String,
        required:true
    },

}, { strict: 'throw' })

const User = model("user",userSchema);
const Ogretmenler = model("ogretmenler",ogretmenlerSchema);

app.get("/allusers",async (req,res)=>{

    const allUsers = await User.find({});

    res.json(allUsers)


})

app.get("/getuserbymaas",async (req,res)=>{


    console.log(req.query.maas);

    const arananMaas = req.query.maas

    const allUsers = await User.find({maas:{$eq:arananMaas}});

    res.json(allUsers)


})


app.post("/adduser",async(req,res)=>{

    console.log(req.body);

    await User.create(req.body);

    res.json(req.body)

})

app.post("/addogretmen",async(req,res)=>{

    console.log(req.body);

    try{
        const result =  await Ogretmenler.create(req.body);
        res.json(req.body)
    }catch(err){
        console.log("Hata:",err);
        res.status(404).send("Hata olustu...")
    }   

})

app.delete("/deleteuserbymaas/:maas",async (req,res)=>{

    const maas = req.params.maas

    const foundedUsers = await User.find({maas:{$eq:maas}});

    await User.deleteMany({maas:{$eq:maas}})

    res.json({status:true,message:maas + "'li kisiler silindi..."})

})



app.listen(3000,()=>{
    console.log(3000 + " calisiyor...");
})