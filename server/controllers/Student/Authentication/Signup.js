
import signupSchema from "../../../models/Student/SignupModel.js";
 import otpgenrated from "../../../utils/Emailsendmessage.js";
import bcrypt from "bcrypt"
const Signup = async (req, res, next) => {
    try {
        const { email, admissionNumber, department, password } = req.body;
        

        if (email && admissionNumber && department && password) {

            const hashpasswordd = await bcrypt.hash(password, 10);
            const findStudentemail = await signupSchema.findOne({
                $or: [
                    { email: email.trim().toLowerCase() },
                    { admissionNumber }
                ]
            });

            if (findStudentemail) {
                return res
                    .status(400)
                    .json({
                        message: "student is already register"
                    })
            }
           
       var randomnnumber=Math.random()*10*10*10*10*10;
       const floornumber=Math.floor(randomnnumber)
       const isVerified=false;
       const sendOtp=await otpgenrated(email,floornumber);
        
               const newUserSignup = new signupSchema({
                email: email.trim().toLowerCase(),
                admissionNumber,
                department,
                password: hashpasswordd,
                otpUser:floornumber,
                isVerified,

            })
              
            const savedaata=await newUserSignup.save();
            return res
                .status(200)
                .json({
                    message: "user data saved successfully",
                    newUserSignup,
                })

        }


    }
    catch (e) {
        console.log(e)
        return res
            .status(400)
            .json({
                message: "we ciuld noit add the user"
            })

    }

}
export default Signup;