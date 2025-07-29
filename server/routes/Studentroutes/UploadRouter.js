import sendPdfStudent from "../../controllers/Student/Send/Sendpdfstudent.js";
import ProtectionMiddleware from "../../middleware/ProtectionMiddelware.js";
import upload from "../../middleware/MulterMiddeware.js";
import ViewPdfs from "../../controllers/Student/Send/ViewPdf.js";
import Allpdf from "../../controllers/Student/Send/AllPdf.js";
import GetStudentdetails from "../../controllers/Student/Send/GetYourdetails.js";
import pdfDowoad from "../../controllers/Student/Send/Pdfdowload.js";
import express from "express";
const routerUpload=express.Router();
routerUpload.post("/student/uploadpdf",ProtectionMiddleware,upload.single("pdfFile"),sendPdfStudent);
routerUpload.post("/student/get/pdf",ProtectionMiddleware,ViewPdfs);
routerUpload.post("/student/get/all/pdf",ProtectionMiddleware,Allpdf)
routerUpload.get("/get/student/details",ProtectionMiddleware,GetStudentdetails);
routerUpload.post("/download/pdf/student/:id",pdfDowoad)
export default routerUpload