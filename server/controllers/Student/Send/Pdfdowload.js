import Studenschemaupload1 from "../../../models/Student/Pdfsavermodel.js";
import axios from "axios"
const pdfDowoad=async(req,res,next)=>
{
    try{
   const {id}=req.params;
   const finduserdownload=await Studenschemaupload1.findById(id);
   const filedownloadname=finduserdownload.pdfName;
   
    const cloudinaryUrl = finduserdownload.pdfFile;
    console.log(cloudinaryUrl);
    // 2. Stream the file from Cloudinary
    const fileResponse = await axios.get(cloudinaryUrl, {
      responseType: "stream",
      timeout: 10000, // 10 seconds timeout
    });
     res.attachment(`${filedownloadname}.pdf`);  // Ensures the file is treated as a downloadable PDF

    // 4. Pipe the file data from Cloudinary to the response
    fileResponse.data.pipe(res); 
    fileResponse.data.on("error", (err) => {
      console.error("❌ Error while streaming:", err.message);
      res.status(500).end("Stream error");
    });

   
   

    }
    catch(e)
    {
         console.error("❌ Download error:", e.message);
    res.status(500).json({
      message: "Error downloading file",
    });
    }

}
export default pdfDowoad;