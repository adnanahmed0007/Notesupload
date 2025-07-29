import express from "express";
import mongoose from "mongoose";
import router from "./routes/Studentroutes/Auth.js";
import routerUpload from "./routes/Studentroutes/UploadRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express();
const port=9901;
const url="mongodb+srv://adnanahmed2578:WGfLQHotnvOjF7u8@cluster0.y4czkva.mongodb.net/";
app.use(cors(
    {
        origin:'http://localhost:5173',  // Your React frontend URL
    credentials: true,
    
    }
 ))
 var randomnnumber=Math.random()*10*10*10*10*10;
 var floornumber=Math.floor(randomnnumber)

 
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth",router)
app.use("/api/pdf",routerUpload)
const connect=mongoose.connect(url)
.then(()=>
{
    
    console.log("we are connected")
    app.listen(port,()=>

{
    console.log(` we are on port ${port}`)
})
})
.catch((e)=>
{
    console.log(e)
})
 