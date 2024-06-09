const express=require("express");
require("dotenv").config()
const app=express()
const PORT=process.env.PORT||3000

app.use(express.json())

const blogRoute=require("./routes/blogRoute")
app.use('/api/v1',blogRoute);

const connectToDb=require('./config/db')

connectToDb();

app.listen(PORT,()=>{
    console.log(`Server listening on Port ${PORT}`)
})


app.get("/",(req,res)=>{
    res.send("<h1>This Homepage</h1>")
})