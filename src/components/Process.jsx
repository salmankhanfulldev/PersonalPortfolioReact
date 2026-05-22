
const Process = () => {
  return (
    <section className="process" id="process">
      <h2>Our Development Process</h2>
      <p>We transform ideas into powerful digital products through a structured yet flexible development process.</p>
      
      <div className="orbit-container">
        {/* Center core element */}
        <div className="center-core">Idea</div>
        
        {/* Orbit Lines */}
        <div className="orbit orbit-1">
          <div className="orb point-1">01</div>
        </div>
        <div className="orbit orbit-2">
          <div className="orb point-2">02</div>
        </div>
        <div className="orbit orbit-3">
          <div className="orb point-3">03</div>
        </div>
        <div className="orbit orbit-4">
          <div className="orb point-4">04</div>
        </div>

        {/* Text descriptions around the orbit structure */}
        <div className="process-steps">
          <div className="step s1"><strong>01 - Discover & Planning</strong></div>
          <div className="step s2"><strong>02 - UI / UX Design</strong></div>
          <div className="step s3"><strong>03 - Development</strong></div>
          <div className="step s4"><strong>04 - Launch & Support</strong></div>
        </div>
      </div>
    </section>
  );
};

export default Process;