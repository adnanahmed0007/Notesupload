import Studenschemaupload1 from "../../../models/Student/Pdfsavermodel.js"
const Allpdf=async(req,res,next)=>
{
    try{
       const userdata= req.finduser;
       const  {pdfName}=req.body;
       if(pdfName&&userdata)
       {
             const findallapdf=await Studenschemaupload1.find({pdfName});
             if(!findallapdf)
             {
                return res
                .status(400)
                .json({
                    message:"we cant find the pdf"
                })
             }
             return res
             .status(200)
             .json({
                message:"All ths pdf is here",
                findallapdf
             })
            }
            else{
                return res
                .status(400)
                .json({
                    message:"all the credentials are required",
                })
            }
    }
    catch(e)
    {
        console.log(e);
        return res
        .status(400)
        .json({
            message:"servroe erroe"
        })
    }
}
export default Allpdf;