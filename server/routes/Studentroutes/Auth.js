 import express from "express";
 import Signup from "../../controllers/Student/Authentication/Signup.js";
 import LoginstUDENT from "../../controllers/Student/Authentication/Loginstudent.js";
 import LogoutStudent from "../../controllers/Student/Authentication/Logout.js";
 import ProtectionMiddleware from "../../middleware/ProtectionMiddelware.js";
 import verifyotp from "../../controllers/Student/Authentication/VerifyOtp.js";
 const router=express.Router();
 router.post("/student/signup",Signup);
 router.post("/stuednt/login",LoginstUDENT)
 router.get("/student/logout",ProtectionMiddleware,LogoutStudent)
 router.post("/signup/otp/verify",verifyotp)
 router.post("/login/student/otp",verifyotp)
 export default router;
