 import React, { useState } from 'react';
import axios from 'axios';

const AllviewPdf = () => {
  const [pdfs, setPdfs] = useState([]);
  const [pdfName, setPdfName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    if (!pdfName) {
      setMessage("Please enter a PDF name.");
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post(
        'http://localhost:9901/api/pdf/student/get/all/pdf',
        { pdfName },
        { withCredentials: true }
      );

      const result = response.data.findallapdf;

      if (result && result.length > 0) {
        setPdfs(result);
        setMessage(response.data.message);
      } else {
        setPdfs([]);
        setMessage('No PDFs found with that name.');
      }
    } catch (error) {
      console.error('Error fetching PDFs:', error);
      setMessage(error.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };
  const pdfafILEdownload=async(id)=>
  {
    try{
      const response=await axios.post(`http://localhost:9901/api/pdf/download/pdf/student/${id}`,
        {},
  {
    withCredentials: true,
    responseType: 'blob',  
  });
       const contentType = response.headers['content-type'];
      if (contentType !== 'application/pdf') {
        throw new Error("The file is not a valid PDF.");
      }

      const url = window.URL.createObjectURL(new Blob([response.data], { type: contentType }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", pdfName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      console.log("Download successful", response);
      
    }
    catch(e)
    {
      console.log(e)
      alert("server error occured")
    }

  }

  return (
    <div className="min-h-screen px-4" style={{ marginTop: '100px', marginLeft: '200px' }}>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📑 Search Uploaded PDF Files
      </h1>

      <div className="flex items-center justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter PDF Name"
          value={pdfName}
          onChange={(e) => setPdfName(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search PDF 🔍
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Loading PDFs...</p>}
      {!loading && message && <p className="text-center text-green-600 mb-4">{message}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs.length > 0 ? (
          pdfs.map((pdf) => (
            <div
              key={pdf._id}
              className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-2 capitalize">📘 {pdf.pdfName}</h2>
                <p className="text-sm mb-1">
                  <span className="font-semibold">Department:</span> {pdf.department}
                </p>
                <p className="text-sm mb-4">
                  <span className="font-semibold">Student:</span> {pdf.Studentname}
                </p>
                <p className="text-sm mb-4">
                  <span className="font-semibold">Student Email:</span> {pdf.email}
                </p>
              </div>
              <div className="mt-auto">
                <button onClick={()=>pdfafILEdownload(pdf._id)}
                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                 Download PDF ⬇️
                 </button>
                  
                 
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-red-500">No PDFs found.</p>
        )}
      </div>
    </div>
  );
};

export default AllviewPdf;


