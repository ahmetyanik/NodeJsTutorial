import express from "express";
import  {passwordControl,authControl,postIcinControl}  from "./middlewares.js";
import cors from "cors";

const app = express();

app.use(express.json()); // Post request icin bu yazilmak zorunda

app.use(
    cors({
      origin: "*",
    })
  );

export const allUsers = [
    {id:1,ad:"ahmet",yas:35,password:123,role:"admin"},
    {id:2,ad:"mehmet",yas:35,password:124,role:"user"}

]


app.get("/", (req,res)=>{
    res.send("<h1>Anasayfa</h1>");
})

app.get("/users", [passwordControl] , (req,res)=>{

     res.status(200).json(allUsers); 

})

app.get("/users/:id", (req,res)=>{

    const id = req.params.id;

    const foundedUser = allUsers.find((user)=>user.id === parseInt(id));


    if(foundedUser){

        res.json(foundedUser);
    }else{
        res.status(404).send(id + "'li kisi bulunamadi!")
    }
    
})

app.post("/users/password",[postIcinControl,authControl],(req,res)=>{

    res.status(200).json({
        status:true,
        message:"Islem basarili..."
    })

})

app.post("/users",[authControl], (req,res)=>{

    const newUser = {
        id:allUsers.length+1,
        ad:req.body.ad,
        yas:req.body.yas,
        password:req.body.password
    }

    allUsers.push(newUser);
    res.send(newUser);

})


app.get("*", (req,res)=>{
    res.send("<h1>Bu sayfa bulunamadi!</h1>");
})



app.listen(3001,()=>{
    console.log(3001 + " calisiyor...");
})