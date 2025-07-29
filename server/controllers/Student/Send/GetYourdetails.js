import Studenschemaupload1 from "../../../models/Student/Pdfsavermodel.js";
const GetStudentdetails=async(req,res,next)=>
{
    try{
      const userdetails=req.finduser;
       
      if(!userdetails)
      {
        return res
        .status(400)
        .json({
            message:"user is not there"
        })
      }
      const iduser=req.finduser._id;
     
      const findallpdfuser=await Studenschemaupload1.find({UserId:iduser});
     

      if(userdetails&&findallpdfuser)
      {
        return res
        .status(200)
        .json({
            message:"got your details",
            Userdetailks:userdetails,
           pdfUploaded:findallpdfuser
        })
      }
      else if(userdetails&&findallpdfuser.length==0)
      {
        return res
        .status(200)
        .json({
            message:" got your details",
              Userdetails:userdetails,
              pdfUploaded:0,
        })
      }
      else if(!findallpdfuser)
      {
        return res
        .status(400)
        .json({
            message:"got the details",
             Userdetails:userdetails,

        })
      }
      else{
        return res
        .status(400)
        .json({
            message:"error occured"
        })
      }
       

    }
    catch(e)
    {
        console.log(e);
        return res
        .status(400)
        .json({
            message:"servor error",
            
        })
    }
}
export default GetStudentdetails