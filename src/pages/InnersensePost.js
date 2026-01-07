// src/pages/blogPosts/InnersensePost.js
import React from "react";
import BlogPostTemplate from "../components/BlogPostTemplate";

const InnersensePost = () => {
  const content = (
    <>
      <p>
        If you’ve tried "natural" shampoos and been disappointed (dry hair, no lather, zero results), I’ve been there. I wanted clean ingredients <em>and</em> salon-level performance — and finally found it in <a href="https://amzn.to/4lIJ4fD" target="_blank" rel="noopener noreferrer">Innersense Organic Beauty</a>. Fun fact, this was the AI recommendation that inspired me to create Old Ways Today. I couldn't believe I had never heard of this brand before!!
      </p>
      <p>After years of buildup from other clean products, the color awakening hairbath was a game changer. It cleaned beautifully without drying out my already dry, color-treated hair. </p>
      <h3>🌿 Why It’s Different</h3>
      <ul>
        <li><strong>Truly clean ingredients</strong> — no synthetic fragrance, sulfates, or questionable chemicals</li>
        <li><strong>Salon-quality results</strong> — gentle but powerful</li>
        <li><strong>Safe for blonded/color-treated hair</strong></li>
        <li><strong>Smells like a spa day</strong> — especially the masks</li>
      </ul>
      <h3>💆‍♀️ My Favorites</h3>
      <ol>
        <li><a href="https://amzn.to/3YbMcXb" target="_blank">Color Awakening Hairbath</a></li>
        <li><a href="https://amzn.to/4lKg5rC" target="_blank">Hydrating Cream Conditioner</a></li>
        <li><a href="https://amzn.to/449iGVW" target="_blank">Detox Hair Mask</a></li>
        <li><a href="https://amzn.to/3EIGh5d" target="_blank">Hydrating Hair Mask</a></li>
      </ol>
      <h3>🚿 Final Thoughts</h3>
      <p>These products clean, hydrate, and clarify — with no compromises.</p>
      <p>I can't wait to try their toning purple <a href="https://amzn.to/4lRnVjt">shampoo</a> and <a href="https://amzn.to/42La2dI">conditioner</a> too!</p>


    </>
  );

  return (
    <BlogPostTemplate
      title="✨ Clean Haircare That Actually Works: Why I Love Innersense"
      image="public/images/blog/innersensefeature.jpg"
      content={content}
    />
  );
};

export default InnersensePost;