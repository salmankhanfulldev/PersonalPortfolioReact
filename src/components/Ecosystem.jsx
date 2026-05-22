
const techTags = [
  "React", "Node.js", "Python", "Docker", "AWS", "Kubernetes", "GraphQL", 
  "TypeScript", "MongoDB", "Next.js", "Flutter", "Solidity", "Vue", "Firebase"
];

const Ecosystem = () => {
  return (
    <section className="ecosystem" id="tech">
      <h2>Our Technology Ecosystem</h2>
      <p>We combine powerful technologies to build scalable digital products, modern applications, and intelligent systems.</p>
      <div className="tech-cluster">
        {techTags.map((tag, index) => (
          <span key={index} className={`tech-tag tag-${index % 4}`}>
            {tag}
          </span>
        ))}
      </div>
      <div className="ecosystem-categories">
        <span>Frontend Excellence</span>
        <span>Backend Architectures</span>
        <span>Cloud & DevOps</span>
        <span>Next-Gen Technologies</span>
      </div>
    </section>
  );
};

export default Ecosystem;