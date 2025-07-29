import signupSchema from "../models/Student/SignupModel.js"
 import jwt from "jsonwebtoken";
 const jwtsecret="mytoken123"
const ProtectionMiddleware=async(req,res,next)=>
{
    try{
const token=req.cookies.jwt;
 

 
if(!token)
{
    return res
    .status(400)
    .json({
        message:"we could not find the token cookies expiress relogin"
    })
}
const verify= jwt.verify(token,jwtsecret);
 
if(!verify)
{
    return res
    .status(400)
    .json({
        message:"we could not verify the token",
    })
}
const finduser=await signupSchema.findById(verify.userId);
req.finduser=finduser;

 
next();
    }
    catch(e)
    {
        console.log(e);
        return res
        .status(400)
        .json({
            message:e,
        })

    }
}
export default ProtectionMiddleware