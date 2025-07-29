 import signupSchema from "../../../models/Student/SignupModel.js";
 
 import GenerateToken from "../../../utils/GenerateToken.js";
 const verifyotp=async(req,res,next)=>
 {
    try{
  var {email,userOtp}=req.body;
  if(email&&userOtp)
  {
    const findUser=await signupSchema.findOne({email});
  
   email=email.trim();
    
    if(!findUser)
    {
  return res
  .status(400)
  .json({
    message:"email is not saved  "
  })
 
    }
    if(userOtp==findUser.otpUser)
    {
       
        findUser.otpUser=null
        findUser.isVerified=true
        findUser.save();
         await GenerateToken(findUser._id,res); 
        return res
        .status(200)
        .json({
            message:"verified otp successfully",
            findUser
        })
    }
    else{
        return res
        .status(400)
        .json({
            message:"otp verification falkide"
        })
    }
  }
  else{
    return res
    .status(400)
    .json({
        mesaage:"enter all the ctredentials"
    })

  }
    }
    catch(e)
    {
        console.log(e);
        return res
        .status(500)
        .json({
            message:"servor error"
        })
    }
 }
 export default verifyotp;