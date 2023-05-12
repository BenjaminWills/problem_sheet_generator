import React from 'react';
import './Blog.css';

var Latex = require('react-latex');

function Blog() {
  return (
    <div>
        <br></br>
        <div className="blog-container">
        <div className="blog-post">
            <h1>The divergence theorem</h1>
            <p>Here is the divergence theorem: </p>
            <Latex>$$\int$$</Latex>
            <p className="author">Author: Ben Wills</p>
            <p className="date">Published on: 12th of May 2023</p>
        </div>

        <div className="blog-post">
            <h1>Another Blog Post</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Vivamus non sem eu metus lacinia consectetur.</p>
            <p className="author">Author: Jane Smith</p>
            <p className="date">Published on: May 5, 2023</p>
        </div>
        

        {/* Add more blog posts as needed */}
        </div>
    </div>
  );
}

export default Blog;
