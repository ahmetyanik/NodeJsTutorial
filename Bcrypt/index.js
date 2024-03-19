import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";

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

app.get("/", (req, res) => {
  res.send("<h1>Anasayfa</h1>");
});

app.get("/users/:id", async (req,res)=>{

    const id = req.params.id;

    const foundedUser = allUsers.find((user)=>user.id === parseInt(id));


    if(foundedUser){

        res.json({...foundedUser,password:await bcrypt.compare("123",foundedUser.password)});
    }else{
        res.status(404).send(id + "'li kisi bulunamadi!")
    }
    
})

app.get("/users", (req, res) => {
  res.status(200).json(allUsers);
});


app.post("/users", async (req, res) => {

    const {ad,yas,password} = req.body;

  const newUser = {
    id: allUsers.length + 1,
    ad: ad,
    yas: yas,
    password: await bcrypt.hash(password,10)
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
