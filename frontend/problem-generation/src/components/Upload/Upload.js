import React, { useState } from 'react';
import './Upload.css';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setSelectedFile(file);
    // Perform additional logic such as sending the file to the cloud
    // using an HTTP request here
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    // Perform additional logic such as sending the file to the cloud
    // using an HTTP request here
  };

  return (
    <div>
        <br/>
        <div className="file-upload-container">
        <div
            className="upload-box"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <input
            type="file"
            id="file"
            className="file-input"
            onChange={handleFileUpload}
            />
            <label htmlFor="file">Drag and drop files here or click to upload</label>
        </div>
        {selectedFile && (
            <div className="file-details">
            <p>File Name: {selectedFile.name}</p>
            <p>File Type: {selectedFile.type}</p>
            <p>File Size: {selectedFile.size} bytes</p>
            {/* Add more file information as needed */}
            </div>
        )}
        </div>
    </div>
  );
};

export default Upload;
