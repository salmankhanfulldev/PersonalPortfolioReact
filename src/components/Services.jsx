// import React from 'react';

const services = [
  { title: "Custom Software Development", desc: "Built software that works for you. Tailored end-to-end platforms." },
  { title: "Artificial Intelligence Development", desc: "Smarter Solutions Through AI. Optimization and predictive analytics." },
  { title: "Blockchain & Web3 Development", desc: "Decentralized Solutions for the Future. Secure smart contracts." },
  { title: "Mobile App Development", desc: "Exceptional Apps for Every Device. Stunning, native iOS & Android experiences." },
  { title: "Cloud & DevOps Services", desc: "Scalable, Reliable Cloud Infrastructure. Continuous integration." },
  { title: "Legacy System Modernization", desc: "Upgrade & Future-Proof Your Tech. Smooth architectural scaling." }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-24 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">Built with cutting-edge technologies to deliver exceptional performance, security, and scalability.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, idx) => (
          <div key={idx} className="group bg-card-bg border border-white/5 p-8 rounded-2xl text-left hover:border-primary-purple/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-primary-purple/10 text-primary-purple flex items-center justify-center mb-6 group-hover:bg-primary-purple group-hover:text-white transition-all duration-300">
              {idx + 1}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-purple transition-colors">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;