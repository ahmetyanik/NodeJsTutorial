import express from "express";
import cors from "cors";
import CryptoJS from "crypto-js";

const SECRET_KEY="galatasaray";

const app = express();

app.use(express.json()); // Post request icin bu yazilmak zorunda

app.use(
  cors({
    origin: "*",
  })
);

export const allUsers = [
  { id: 1, ad: "ahmet", yas: 35, password: 123, role: "admin" },
  { id: 2, ad: "mehmet", yas: 35, password: 124, role: "user" },
];

let sifreliVeri;

app.get("/", (req, res) => {


   sifreliVeri = CryptoJS.Rabbit.encrypt("merhaba",SECRET_KEY).toString();

    console.log("sifrelenmis veri:",sifreliVeri);

    const cözülmüsVeri = CryptoJS.Rabbit.decrypt(sifreliVeri,"galatasaray").toString(CryptoJS.enc.Utf8);

    console.log("Cözülmüs veri:",cözülmüsVeri);




  res.send("<h1>Anasayfa</h1>");
});

app.get("/users/:id", async (req,res)=>{

    const id = req.params.id;

    const foundedUser = allUsers.find((user)=>user.id === parseInt(id));


    if(foundedUser){

        res.json({...foundedUser,password:CryptoJS.Rabbit.decrypt(sifreliVeri,"galatasaray").toString(CryptoJS.enc.Utf8)});
    }else{
        res.status(404).send(id + "'li kisi bulunamadi!")
    }
    
})

app.get("/users", (req, res) => {
  res.status(200).json(allUsers);
});


app.post("/users", async (req, res) => {

  
  const {ad,yas,password} = req.body;
  sifreliVeri = CryptoJS.Rabbit.encrypt(password,SECRET_KEY).toString();

  const newUser = {
    id: allUsers.length + 1,
    ad: ad,
    yas: yas,
    password: CryptoJS.Rabbit.encrypt(sifreliVeri,SECRET_KEY).toString()
  };

  allUsers.push(newUser);
  res.send(newUser);
});



app.get("*", (req, res) => {
  res.send("<h1>Bu sayfa bulunamadi!</h1>");
});

app.listen(3001, () => {
  console.log(3001 + " calisiyor...");
});
