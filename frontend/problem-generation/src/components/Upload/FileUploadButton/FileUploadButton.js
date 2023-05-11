import './FileUploadButton.css';
import React, { useRef } from 'react';
import AWS from 'aws-sdk';

require('dotenv').config();

const accessKeyId = process.env.AWS_ACCOUNT_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;

AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: region,
});

const s3 = new AWS.S3();

const FileUploadButton = () => {
  return (
    <div>
        <p>accessKeyId</p>
        <p>secretAccessKey</p>
        <p>region</p>
        <p>bucketName</p>
    </div>
  )
  }

export default FileUploadButton;
