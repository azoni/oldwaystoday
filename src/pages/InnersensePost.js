// src/pages/blogPosts/InnersensePost.js
import React from "react";
import BlogPostTemplate from "../components/BlogPostTemplate";

const InnersensePost = () => {
  const content = (
    <>
      <p>
        If you’ve tried "natural" shampoos and been disappointed (dry hair, no lather, zero results), I’ve been there. I wanted clean ingredients <em>and</em> salon-level performance — and finally found it in <a href="https://shrsl.com/4f0l6" target="_blank" rel="noopener noreferrer">Innersense Organic Beauty</a>.
      </p>
      <p>After years of buildup from other clean products, Innersense was a game changer.</p>
      <img src="/images/innersense-hairbath.jpg" alt="Innersense Hydrating Cream Hairbath" className="inline-image" />
      <h2>🌿 Why It’s Different</h2>
      <ul>
        <li><strong>Truly clean ingredients</strong> — no synthetic fragrance, sulfates, or questionable chemicals</li>
        <li><strong>Salon-quality results</strong> — gentle but powerful</li>
        <li><strong>Safe for blonded/color-treated hair</strong></li>
        <li><strong>Smells like a spa day</strong> — especially the masks</li>
      </ul>
      <h2>💆‍♀️ My Favorites</h2>
      <ol>
        <li><a href="https://amzn.to/3YbMcXb" target="_blank">Color Awakening Hairbath</a></li>
        <li><a href="https://amzn.to/4lKg5rC" target="_blank">Hydrating Cream Conditioner</a></li>
        <li><a href="https://amzn.to/449iGVW" target="_blank">Detox Hair Mask</a></li>
        <li><a href="https://amzn.to/3EIGh5d" target="_blank">Hydrating Hair Mask</a></li>
      </ol>
      <img src="/images/innersense-mask.jpg" alt="Using the Innersense mask" className="inline-image" />
      <h2>🚿 Final Thoughts</h2>
      <p>These products clean, hydrate, and clarify — with no compromises.</p>
      <p>I can't wait to try their toning purple <a href="https://amzn.to/4lRnVjt">shampoo</a> and <a href="https://amzn.to/42La2dI">conditioner</a> too!</p>


    </>
  );

  return (
    <BlogPostTemplate
      title="✨ Clean Haircare That Actually Works: Why I Love Innersense"
      image="../../public/blogImages/innersense/innersense-feature.jpg"
      content={content}
    />
  );
};

export default InnersensePost;