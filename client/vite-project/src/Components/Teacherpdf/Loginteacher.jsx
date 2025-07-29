import React from 'react'

const Loginteacher = () => {
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 px-4">
  <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl border border-gray-300">
    <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
      Welcome Back 👋
    </h2>
    <p className="text-center text-gray-600 mb-6">
      Please log in to your student dashboard
    </p>

    <form  className="space-y-6">
      <div>
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
        
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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

    </div>
  )
}

export default Loginteacher
