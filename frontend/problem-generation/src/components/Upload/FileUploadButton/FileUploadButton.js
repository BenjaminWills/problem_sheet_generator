import './FileUploadButton.css';
import React, { useRef } from 'react';

const FileUploadButton = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log('Dropped file:', file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="file-upload-button"
      onClick={handleButtonClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button>Upload</button>
    </div>
  );
};

export default FileUploadButton;
