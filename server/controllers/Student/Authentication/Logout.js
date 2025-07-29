const LogoutStudent=async(req,res,next)=>
{
    try{
        res.cookie("jwt","",{
            maxAge:"",
            httpOny:true,
              sameSite:"lax",
        secure: process.env.NODE_ENV === "production"
        })
        return res
        .status(200)
        .json({
            message:"logout succesfully"
        })

    }catch(e)
    {
        console.log(e)
    }
}
export default LogoutStudent