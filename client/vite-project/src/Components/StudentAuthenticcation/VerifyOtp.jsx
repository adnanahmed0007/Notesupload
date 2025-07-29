 import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9901/api/auth/signup/otp/verify',
        {
          email: email.trim().toLowerCase(),
          userOtp:otp
        },
        { withCredentials: true }
      );

      if (response && response.status === 200) {
        alert(response.data.message);
        navigate('/');  
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert('Something went wrong');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Verify OTP
        </h2>

        <form onSubmit={handleVerify} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* OTP Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              OTP
            </label>
            <input
              type="text"
              placeholder="Enter the OTP"
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
