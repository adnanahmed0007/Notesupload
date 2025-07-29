import dotenv from "dotenv"  
dotenv.config()
import cloudinary from "cloudinary"
 import Studenschemaupload1 from "../../../models/Student/Pdfsavermodel.js"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,       // replace with your Cloudinary credentials
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})
const sendPdfStudent=async(req,res,next)=>
{
try{
       const {Studentname,pdfName}=req.body;
       
    if(Studentname&&pdfName)
    {
     const file=req.file;
     if(!file)
     {
        return res
        .status(400)
        .json({
            message:"we could not upload the pdf"
        })

     }
     
     cloudinary.v2.uploader.upload_stream(
      { resource_type: "raw" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary error:", error);
          return res.status(500).json({ message: "Cloudinary upload failed" });
        }
        const fileUrl = result.secure_url;
        const userId=req.finduser._id;

      
        const department=req.finduser.department;
        const email=req.finduser.email;
        const newpdfsave=await Studenschemaupload1({
            Studentname:Studentname.trim().toLowerCase(),
            pdfName:pdfName.trim().toLowerCase(),
             UserId:userId,
             pdfFile:fileUrl,
             department:department.trim().toLowerCase(),
             email:email.trim().toLowerCase(),

        })
        const savepdf=await newpdfsave.save();
        if(savepdf){
            return res
            .status(200)
            .json({
                message:"uploaded pdf successfully",
                savepdf
            })
        }
        else{
            return res
            .status(400)
            .json({
                message:"we could not upload it "
            })
        }

    }).end(file.buffer); 
}

}

catch(e)
{
    console.log(e)
}
}
export default sendPdfStudent