const express = require("express");
const userRouter = require("./router/user_router");
const productRouter = require("./router/product_router");

const app = express();

app.get("/", (req,res)=>{
    res.send("Anasayfa Url'i:" + req.url)
})

app.use("/",userRouter);
app.use("/",productRouter);


app.listen(3000,()=>{
    console.log("3000 calisiyor...");
})