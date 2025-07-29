 import React, { useState } from 'react';
import axios from 'axios';

const Sendpdfstudent = () => {
  const [Studentname, setStudentName] = useState('');
  const [pdfName, setPdfName] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdfFile) {
      alert("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("Studentname",Studentname);
    formData.append("pdfName",pdfName);
    formData.append("pdfFile", pdfFile);
    

    try {
      const res = await axios.post("http://localhost:9901/api/pdf/student/uploadpdf",formData, {
          headers: { "Content-Type": "multipart/form-data" },
        withCredentials:true
      });
      if(res)
      {
      alert("PDF uploaded successfully!");
      }
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("PDF upload failed.");
    }
  };

  return (
     <div className="min-h-screen   flex items-center justify-center px-4 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black rounded-xl shadow-md p-8 w-full max-w-md border border-gray-200"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Upload Student PDF</h1>

        <label className="block mb-1 font-semibold">Student Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
       placeholder='enter your name'
          onChange={(e) => setStudentName(e.target.value)}
          required
        />

        <label className="block mb-1 font-semibold">PDF Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder='enter the student name'
          value={pdfName}
          onChange={(e) => setPdfName(e.target.value)}
          required
        />

        <label className="block mb-1 font-semibold">Select PDF</label>
        <input
          type="file"
          accept="application/pdf"
          className="w-full p-2 mb-4 border border-gray-300 rounded bg-white"
          onChange={(e) => setPdfFile(e.target.files[0])}
          required
        />

        

        <button
          type="submit"
          className="w-full bg-black text-white font-medium py-2 rounded hover:bg-gray-800 transition"
        >
          Upload PDF
        </button>
      </form>
    </div>
  );
};

export default Sendpdfstudent;

