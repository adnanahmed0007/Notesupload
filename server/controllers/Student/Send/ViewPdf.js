import Studenschemaupload1 from "../../../models/Student/Pdfsavermodel.js";
const ViewPdfs=async(req,res,next)=>
{
    try{
 var {pdfName,department}=req.body;
 if(!pdfName||!department)
 {
    return res
    .status(400)
    .json({
        message:"we cant find the name",
    })
 }
 pdfName=pdfName.trim().toLowerCase();
 department=department.trim().toLowerCase();
 
 const findpdf=await Studenschemaupload1.find({pdfName,department})
 if(!findpdf)
 {
    return res
    .status(400)
    .json({
        message:"we cant find your pdf "
    })
 }
 else if(findpdf.length==0)
 {
    return res
    .status(400)
    .json({
        message:"we cant find your pdf"
    })
 }
 return res
 .status(200)
 .json({
    message:"we found your pdf",
    findpdf
 })

    }
    catch(e)
    {
    return res
    .status(400
        .json({
            message:"error occured"
        })
    )
    }
}
export default ViewPdfs