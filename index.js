const express = require("express")
const app = express();

app.get("/app",(req,res)=>{
    res.send("estoy en la ruta app")
})

app.get("/",(req,res)=>{
    res.send("estoy en la ruta home")
})
app.get("*",(req,res)=>{
    res.send("estoy en la ruta null")
})
app.listen(3000,()=>{
    console.log("el servidor esta iniciado port 3000")
})