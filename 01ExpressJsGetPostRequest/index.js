const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json()); // Post request icin bu yazilmak zorunda

const users = [
    {id:1,ad:"ahmet",yas:35, password:"123456"},
    {id:2,ad:"mehmet",yas:33},
    {id:3,ad:"ali",yas:31},
    {id:4,ad:"veli",yas:39},
    {id:5,ad:"zeynep",yas:7}
]


app.get("/", (req,res)=>{
    res.send("<h1>Anasayfa</h1>");
})

app.get("/users", (req,res)=>{

     if(req.query.terscevir){
        res.send(users.reverse());
    }else{
        res.json(users);

    }  

})

app.get("/users/:id", (req,res)=>{

    const id = req.params.id;

    const foundedUser = users.find((user)=>user.id === parseInt(id));


    if(foundedUser){

        res.json(foundedUser);
    }else{
        res.status(404).send(id + "'li kisi bulunamadi!")
    }
    
})

app.post("/users", (req,res)=>{

    const newUser = {
        id:users.length+1,
        ad:req.body.ad,
        yas:req.body.yas
    }

    users.push(newUser);
    res.send(newUser);

})


app.get("*", (req,res)=>{
    res.send("<h1>Bu sayfa bulunamadi!</h1>");
})



app.listen(PORT)