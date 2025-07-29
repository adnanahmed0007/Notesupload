 import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Mycontext from '../Mycontext';

const Header = () => {
  const { student } = useContext(Mycontext);
  const {teacher}=useContext(Mycontext)

  return (
    <>
     
      <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        <div className="text-3xl font-extrabold text-black tracking-wide">
          PDF Hub
        </div>

      
        <nav className="flex flex-wrap gap-4 items-center">
          <Link
            to="/"
            className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
          >
            Home
          </Link>

          {student && !teacher  && (
            <>
              <Link
                to="/signup/student"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Signup Student
              </Link>

              <Link
                to="/login/student"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Login Student
              </Link>
              <Link
                to="/logout/student"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Logout
              </Link>
              
            </>
          )}
          {teacher  && !student&& (
            <>
              <Link
                to="/signup/teacher"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Signup Teacher
              </Link>

              <Link
                to="/login/teacher"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Login Teacher
              </Link>
              <Link
                to="/logout/teacher"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Logout
              </Link>
              
            </>
          )}
        </nav>
      </header>

      {/* Sidebar only for logged in student */}
      {student && !teacher&& (
        <aside className="fixed top-20 left-0 w-48 h-full bg-gray-100 shadow-lg py-6 px-4 space-y-4">
          <Link
            to="/send/pdf/student"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
            Send PDF
          </Link>
          <Link
            to="/view/pdf/student"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
            View PDF
          </Link>
          <Link
            to="/view/pdf/all"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
            View PDF All
          </Link>
          <Link
            to="/details/user/student"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
             INfo
          </Link>
        </aside>
      )}
      {teacher && !student && (
        <aside className="fixed top-20 left-0 w-48 h-full bg-gray-100 shadow-lg py-6 px-4 space-y-4">
          <Link
            to="/sendpdf/teacher"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
            Send PDF
          </Link>
          <Link
            to="/viewpdf/teacher"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
            View PDF
          </Link>
          <Link
            to="/viewpdfall/teacher"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
            View PDF All
          </Link>
          <Link
            to="/info/teacher"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
             INfo
          </Link>
        </aside>
      )}
    </>
  );
};

export default Header;
