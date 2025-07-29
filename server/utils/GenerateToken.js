import jwt from "jsonwebtoken";
const jwtsecret="mytoken123"
const GenerateToken=async(userId,res)=>
{
    try{
  
     const jwtsging=jwt.sign({userId},jwtsecret,{expiresIn:"15d"});
     res.cookie("jwt",jwtsging,{
         maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
         
        sameSite: "lax",
       secure: process.env.NODE_ENV === "production"

     })
     return jwtsging;
    }
    catch(e)
    {
        console.log(e);
    }
}
export default GenerateToken;