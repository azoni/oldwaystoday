// // src/pages/Blog.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Blog.css";

// const blogPosts = [
//   {
//     id: "innersense",
//     title: "Clean Haircare That Actually Works",
//     description: "Why I love Innersense for salon-quality clean haircare.",
//     image: "/images/innersense-feature.jpg",
//   },
//   // Add new blog posts here
// ];

// const Blog = () => {
//   return (
//     <div className="blog-list">
//       {blogPosts.map((post) => (
//         <Link to={`/blog/${post.id}`} className="blog-tile" key={post.id}>
//           <img src={post.image} alt={post.title} className="tile-image" />
//           <div className="tile-content">
//             <h3>{post.title}</h3>
//             <p>{post.description}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Blog;

// src/pages/Blog.js
import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const blogPosts = [
  {
    id: "innersense",
    title: "Clean Haircare That Actually Works",
    description: "Salon-quality products without the toxins.",
    image: "public/images/blog/innersensefeature.jpg",
  },
  {
    id: "smoothie",
    title: "Spring Smoothie Recipes",
    description: "Simple clean blends for energy and skin.",
    image: "public/images/blog/innersensefeature.jpg",
  },
];

const Blog = () => (
  <section className="blog-container">
    <h2 className="blog-header">Our Blog</h2>
    <div className="blog-tiles">
      {blogPosts.map((post) => (
        <Link to={`/blog/${post.id}`} className="blog-entry" key={post.id}>
          <div className="entry-text">
            <h3>{post.title}</h3>
            <p className="view-post">View Post</p>
          </div>
          <img src={post.image} alt={post.title} className="entry-image" />
        </Link>
      ))}
    </div>
  </section>
);

export default Blog;