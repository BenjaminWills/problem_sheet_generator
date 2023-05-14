import React, { useState } from 'react';
import AWS from 'aws-sdk'
import './Upload.css';

const Upload = () => {
  // Base vars

  const [selectedFile, setSelectedFile] = useState(null);

  // Specify AWS params
  const S3_BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME;
  const REGION = process.env.REACT_APP_AWS_REGION;

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCOUNT_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
  })

  const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET},
      region: REGION,
  })

  // S3 upload function

  const uploadToS3 = (file) => {
    const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };
    
    myBucket.putObject(params)
  }

  // Handlers
  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setSelectedFile(file);

    // Upload file to cloud
    uploadToS3(file)
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    // Upload to S3
    uploadToS3(file)
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
