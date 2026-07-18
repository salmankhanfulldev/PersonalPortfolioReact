// import React from 'react';

const services = [
  {
    title: "Frontend Development",
    desc: "We create modern, responsive, and visually engaging user interfaces using React.js, Next.js, and Tailwind CSS. Our focus is on delivering seamless user experiences, fast performance, and pixel-perfect designs that work flawlessly across all devices and screen sizes."
  },
  {
    title: "MERN Stack Development",
    desc: "We build scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js. From frontend interfaces to backend architecture and database management, we deliver secure, high-performance solutions tailored to business requirements."
  },
  {
    title: "WordPress Development",
    desc: "We develop professional WordPress websites with custom themes, plugin integrations, and advanced functionality. Our solutions are optimized for performance, security, SEO, and easy content management to support long-term business growth."
  },
  {
    title: "E-Commerce Development",
    desc: "We design and develop powerful e-commerce platforms that provide secure shopping experiences and streamlined business operations. Our solutions include product management, payment gateway integration, user authentication, and mobile-friendly designs."
  },
  {
    title: "REST API Development",
    desc: "We create secure, scalable, and well-documented REST APIs that enable seamless communication between applications and services. Our APIs are designed for reliability, performance, and easy integration with web, mobile, and third-party platforms."
  },
  {
    title: "Website Maintenance & Support",
    desc: "We provide ongoing website maintenance, performance optimization, security updates, and technical support. Our proactive approach ensures your website remains secure, up-to-date, and fully operational while minimizing downtime and technical issues."
  }
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