import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during file upload.");
    }
  };

  return (
    <>
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button 
        onClick={handleUpload} 
        disabled={!selectedFile}
        style={{
          marginLeft: "10px", 
          padding: "8px 16px", 
          backgroundColor: "#007bff", 
          color: "white", 
          border: "none", 
          borderRadius: "4px", 
          cursor: "pointer",
        }}
      >
        Upload
      </button>
    </div>
<div style={{ marginTop: "20px", textAlign: "center" }}>
<h2>File Delete</h2>
<input type="select" onChange={handleFileChange} />
<button 
  onClick={handleUpload} 
  disabled={!selectedFile}
  style={{
    marginLeft: "10px", 
    padding: "8px 16px", 
    backgroundColor: "#007bff", 
    color: "white", 
    border: "none", 
    borderRadius: "4px", 
    cursor: "pointer",
  }}
>
  File Delete
</button>
</div>
</>
  );
}

export default FileUpload;
