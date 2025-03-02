import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const fetchPdf = async () => {
    const response = await axios.get("http://localhost:5000/generate-pdf", {
      responseType: "blob",
    })
    const url = URL.createObjectURL(response.data);
    setPdfUrl(url);
  }

  return (
    <>
      <div>
      <h1>API response:</h1>
      <button onClick={fetchPdf}>Generate PDF</button>
      {pdfUrl && (
        <iframe 
        src={pdfUrl}
        width="100%"
        height="500px"
        style={{border: "none", marginTop: "20px"}}/>
      )}
      </div>
    </>
  );
}

export default App
