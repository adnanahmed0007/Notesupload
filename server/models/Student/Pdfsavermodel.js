import mongoose from "mongoose";
import express from "express";
const Studentpdfschema=new mongoose.Schema({
    Studentname:{
        type:String,
        required:true,   
    },
    department:
    {
        type:String,
        required:true,

    },
    pdfName:{
        type:String,
        required:true,
    },
    pdfFile:{
        type:String,
        required:true,

    },
    UserId:
    {
        type:mongoose.Types.ObjectId,
        ref:"signupstudent",
    },
    email:
    {
        type:String,
        required:true,
        
    }

},{timestamps:true})
const Studenschemaupload1=mongoose.model("pdfmodel",Studentpdfschema)
export default Studenschemaupload1;