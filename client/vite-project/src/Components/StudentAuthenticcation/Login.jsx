 import React, { useContext } from 'react';
import Mycontext from '../../Mycontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword } = useContext(Mycontext);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9901/api/auth/stuednt/login',
        {
          email: email.trim().toLowerCase(),
          password: password.trim(),
        },
        { withCredentials: true }
      );
      if (response) {
        alert(`${response.data.message}. Please check your Gmail — OTP has been sent.`);
        navigate('/verifyotp/student');
        console.log('Login success:', response);
      }
    } catch (e) {
      console.log('Login error:', e);
      if (e.response && e.response.status === 400) {
        alert(e.response.data.message);
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefefe] to-[#e3e3e3] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white border border-gray-200">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
      Welcome Back 👋
    </h2>
   
        <p className="text-center text-sm text-gray-500 mb-6">
        
         Sign in to your student dashboard

        
          
        </p>
         

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;



