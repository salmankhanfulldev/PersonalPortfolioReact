
const servicesData = [
  { title: "Custom Software Development", desc: "Built software that works for you." },
  { title: "Artificial Intelligence Development", desc: "Smarter Solutions Through AI." },
  { title: "Blockchain & Web3 Development", desc: "Decentralized Solutions for the Future." },
  { title: "Mobile App Development", desc: "Exceptional Apps for Every Device." },
  { title: "Cloud & DevOps Services", desc: "Scalable, Reliable Cloud Infrastructure." },
  { title: "Legacy System Modernization", desc: "Upgrade & Future-Proof Your Tech." }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <p className="subtitle">Built with cutting-edge technologies to deliver exceptional performance, security, and scalability.</p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;