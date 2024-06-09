const mongoose=require("mongoose")

const connectToDb=()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connected to Database Successfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=connectToDb;