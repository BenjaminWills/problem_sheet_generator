import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div>
        <br></br>
        <div className="blog-container">
        <div className="blog-post">
            <h1>My Blog Post</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Sed commodo efficitur neque, non pellentesque mi facilisis vitae.</p>
            <p className="author">Author: John Doe</p>
            <p className="date">Published on: May 1, 2023</p>
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
