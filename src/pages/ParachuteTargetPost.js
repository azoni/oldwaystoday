// src/pages/ParachuteTargetPost.js
import React from "react";
import BlogPostTemplate from "../components/BlogPostTemplate";

const ParachuteTargetPost = () => {
  const content = (
    <>
      <p>
        Breathable, natural bedding just got easier to find — Target is
        launching a new <strong>Parachute Home collection</strong> starting <strong>April 27</strong>, and I couldn’t be more excited.
      </p>

      <img
        src="/images/blog/parachute-collection-preview.jpg"
        alt="Target Parachute bedding collection"
        className="inline-image"
      />

      <p>
        This collection features <strong>OEKO-TEX® certified</strong> materials,
        including <strong>organic cotton</strong> and soft <strong>cotton-linen blends</strong> — perfect for anyone wanting a cozier, cleaner sleep environment.
      </p>

      <p>
        Personally, I'd skip the quilts especially at this price range because they are filled with recycled polyester! I hope in the future we will see more cotton filling in quilts, but in the meantime, Threshold has this lovely<a href="https://www.target.com/p/printed-cotton-voile-tonal-floral-quilt-threshold/-/A-89559621?preselect=89211131"  rel="noopener noreferrer">100% cotton quilt</a>! Just be sure to verify the fill material on quilts and comforters, it is usually buried down in the product details.
      </p>

      <p>
        I made the switch to <strong>100% cotton bedding and pajamas</strong> last year, and it changed the way I sleep. I don’t wake up sweaty or tangled in synthetics anymore — just soft, breathable, comfortable layers that help me rest better.
      </p>

      <p>
        Natural fibers like cotton and linen are finally going mainstream again,
        and I’m here for it. It’s simple, it’s safe, and it feels so much better.
      </p>

      <img
        src="/images/blog/target-parachute-preview2.jpg"
        alt="Natural bedding from Parachute at Target"
        className="inline-image"
      />

      <p>
        You can <a href="https://www.target.com/c/parachute-for-target/-/N-r0i21" target="_blank" rel="noopener noreferrer">preview the collection here</a>, and shop it in stores and online starting <strong>April 27</strong>.
      </p>

      <p>Here’s to better sleep — and better options for clean, cozy living.</p>
      </>
  );

  return (
    <BlogPostTemplate
      title="Target’s New Parachute Collection Is a Win for Clean Sleep"
      image="/images/blog/parachute-hero.jpg"
      content={content}
    />
  );
};

export default ParachuteTargetPost;
