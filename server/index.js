const express = require('express');
const mongoose = require('mongoose');

const dotenv=require('dotenv');
const app=express();
const authRoute=require("./routes/auth");
dotenv.config();


mongoose.set('strictQuery', true);

// mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(process.env.MONGO_URL)
.then(function(db){
    console.log("db connected success");
})
.catch(function(err){
console.log("db connected error",err);
       
})


app.use(express.json());

app.use("/server/auth",authRoute);


app.listen(8800,()=>{
    console.log("Server is running at port 8800 !")
})