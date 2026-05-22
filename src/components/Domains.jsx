
const domainsData = [
  "Ecommerce Platform", "Fintech Solution", "Agriculture Technology", 
  "Enterprise Resource Planning", "AI Agent", "EdTech Platforms",
  "Logistic and Fleet Management", "Real Estate Tech", "SaaS Subscription Platform"
];

const Domains = () => {
  return (
    <section className="domains" id="domains">
      <h2>Our Flagship Domains</h2>
      <p>From banking to education, our tech has powered innovation across key sectors.</p>
      <div className="domains-grid">
        {domainsData.map((domain, index) => (
          <div className="domain-card" key={index}>
            <h4>{domain}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;