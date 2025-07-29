 import React from 'react';
import axios from 'axios';

const Logout = () => {
  async function handleClick() {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    try {
      const logoutstudent = await axios.get(
        "http://localhost:9901/api/auth/student/logout",
        { withCredentials: true }
      );

      if (logoutstudent) {
        alert("Student logged out");
      }
    } catch (e) {
        
        console.log(e)
      console.error("Logout failed", e.response.data.message);
      alert(e.response.data.message);
    }
  }

  return (
     <div className="min-h-screen flex items-center justify-center px-4  bg-white">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-md hover:bg-gray-900 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

