// src/components/BlogPostTemplate.js
import React from "react";
import "./BlogPostTemplate.css";

const BlogPostTemplate = ({ title, image, content }) => {
  return (
    <article className="blog-post">
      <header className="post-header">
        <h1>{title}</h1>
        <img src={image} alt={title} className="post-featured-image" />
      </header>
      <section className="post-content">{content}</section>
    </article>
  );
};

export default BlogPostTemplate;