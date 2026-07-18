// import React from 'react';

const tags = ["HTML5", "CSS3", "Tailwind CSS", "JQuery", "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "MongoDB", "Next.js",  "NestJS","Supabase", "Strapi",  "Docker","Git", "Github"];

const Ecosystem = () => {
  return (
    <section id="technologies" className="py-20 bg-black/40 px-6 lg:px-24 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Technology Ecosystem</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">We combine powerful technologies to build scalable digital products.</p>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
        {tags.map((tag, idx) => (
          <span key={tag} className="px-6 py-2.5 bg-card-bg border border-white/5 rounded-full text-gray-300 font-medium text-sm hover:text-white hover:border-secondary-blue/50 transition-all duration-300 animate-pulse-slow" style={{ animationDelay: `${idx * 200}ms` }}>
            {tag}
          </span>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
        <div className="border-r border-white/10 last:border-0 py-2">Frontend Development</div>
        <div className="border-r border-white/10 last:border-0 py-2">Backend Development</div>
        <div className="border-r border-white/10 last:border-0 py-2">Full Stack Solutions</div>
        <div className="border-r border-white/10 last:border-0 py-2">Next-Gen Technologies</div>
      </div>
    </section>
  );
};

export default Ecosystem;