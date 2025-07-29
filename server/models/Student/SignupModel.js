import mongoose from "mongoose";
 const signup=mongoose.Schema({
    email:
    {
        type:String,
        required:true,
        unique:true,
    },
    admissionNumber:
    {
        type:Number,
        required:true,
        unique:true,
    },
    department:
    {
        type:String,
        required:true,
    
    },
    password: 
    {
        type:String,
        required:true,
    },
    otpUser:
    {
        type:Number,
       
    },
    isVerified:{
        type:Boolean,
        required:true,

    }
    
    

},{timestamps:true})
const signupSchema=mongoose.model("signupstudent",signup)
export default signupSchema