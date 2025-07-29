 import React, { useState } from 'react'
 import { BrowserRouter,Route,Routes } from 'react-router-dom'
 import Header from './Components/Header'
 import Home from './Components/Home'
 import Signup from './Components/StudentAuthenticcation/Signup'
 import Login from './Components/StudentAuthenticcation/Login'
 import Sendpdfstudent from './Components/StudentAuthenticcation/Sendpdfstudent'
 import Mycontext from './Mycontext'
 import ViewPdf from './Components/StudentAuthenticcation/ViewPdf'
 import Logout from './Components/StudentAuthenticcation/Logout'
 import VerifyOtp from './Components/StudentAuthenticcation/VerifyOtp'
 import AllviewPdf from './Components/StudentAuthenticcation/AllviewPdf'
 import Userdetails from './Components/StudentAuthenticcation/Userdetails'
 import Signupteacgher from './Components/Teacherpdf/Signupteacgher'
 import Loginteacher from './Components/Teacherpdf/Loginteacher'
 import LogoutTeacher from './Components/Teacherpdf/LogoutTeacher'
 import SendPdfteacher from './Components/Teacherpdf/SendPdfteacher'
 import ViewPdfallTecher from './Components/Teacherpdf/ViewPdfallTecher'
 import ViewPdfteacher from './Components/Teacherpdf/ViewPdfteacher'
 import Infoteacher from './Components/Teacherpdf/Infoteacher'

 const App = () => {
  const [student,setStudent]=useState(false)
  const [teacher,setTeacher]=useState(false)
  const [email,setEmail]=useState("");
  const [department,setDepartment]=useState("");
  const [password,setPassword]=useState("");
  const [admissionNumber,setAdmissionNumber]=useState("");
   return (
    <Mycontext.Provider value={{student,setStudent,teacher,setTeacher,email,setEmail,department,setDepartment,admissionNumber,setAdmissionNumber,password,setPassword}}> 
    <BrowserRouter> 
    <Header />
     <nav>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/signup/student" element={<Signup />} />
    <Route path="/login/student" element={<Login />} />
        <Route path="/logout/student" element={<Logout/>} />
    <Route path="/send/pdf/student" element={<Sendpdfstudent />} />
    <Route path="/view/pdf/student" element ={<ViewPdf />}/>
<Route path="/verifyotp/student" element={<VerifyOtp />}/>
<Route path="/view/pdf/all" element={<AllviewPdf />}/>
<Route path="/details/user/student" element={<Userdetails />}/>
<Route path="/signup/teacher" element={<Signupteacgher />} />
<Route path="/login/teacher" element={<Loginteacher />} />
    <Route path="/logout/teacher" element={<LogoutTeacher />} />
      <Route path="/sendpdf/teacher" element={<SendPdfteacher />} />
           <Route path="/viewpdfall/teacher" element={<ViewPdfallTecher />} />
     <Route path="/viewpdf/teacher" element={<ViewPdfteacher />} />
          <Route path="/info/teacher" element={<Infoteacher />} />
  
</Routes>
     </nav>
     </BrowserRouter>
     </Mycontext.Provider>
   )
 }
 
 export default App
 
