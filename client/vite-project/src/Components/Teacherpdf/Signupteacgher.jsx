  import React from 'react';

const Signupteacher = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
         <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
      Welcome 👋
      <p>
        Techer Signup
      </p>
    </h2>
        <form className="space-y-5">
          {/* Add your fields here like name, email, password, etc. */}
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Department</label>
            <input
              type="text"
              placeholder="Enter your department"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signupteacher;

