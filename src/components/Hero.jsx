

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>AI, CLOUD & <span>SOFTWARE SOLUTIONS</span></h1>
        <p>
          At CodeVertex, we create intelligent digital solutions that empower businesses 
          to innovate and scale. From AI-driven platforms to reliable cloud infrastructure, 
          our technology is designed to turn complex ideas into powerful digital products.
        </p>
        <div className="hero-tags">
          <span>AI Solutions</span>
          <span>Blockchain</span>
          <span>Cloud Platforms</span>
        </div>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">View Our Services</button>
        </div>
      </div>
      <div className="hero-image-container">
        {/* Aap apni robot image ka path yahan use karenge */}
        <img src="path-to-your-robot-image.png" alt="AI Robot" className="floating-robot" />
      </div>
    </section>
  );
};

export default Hero;