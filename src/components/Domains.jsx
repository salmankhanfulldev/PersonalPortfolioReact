const domainsData = [
  "Ecommerce Platform",
  "Fintech Solution",
  "Agriculture Technology",
  "Enterprise Resource Planning",
  "AI Agent",
  "EdTech Platforms",
  "Logistic and Fleet Management",
  "Real Estate Tech",
  "SaaS Subscription Platform",
];

const Domains = () => {
  return (
    <section
      id="domains"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_55%)] blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="inline-flex rounded-full bg-primary-purple/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary-purple">
            Core Expertise
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Our Flagship Domains
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            We build bold digital experiences for fast-growing businesses using
            modern product design, intelligent architecture, and polished
            motion.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {domainsData.map((domain, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/80 p-6 text-slate-100 shadow-[0_28px_80px_-48px_rgba(59,130,246,0.6)] transition duration-500 hover:-translate-y-1 hover:border-secondary-blue/50 hover:bg-slate-900/95 animate-fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="absolute -right-10 top-6 h-24 w-24 rounded-full bg-secondary-blue/10 blur-3xl opacity-90" />
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white sm:text-xl">
                  {domain}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Build future-ready platforms with secure architecture,
                  compelling UX, and strong performance.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
