const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary-purple/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-52 w-52 rounded-full bg-secondary-blue/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr] lg:items-center">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-primary-purple/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary-purple">
              Let’s build together
            </span>
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">
              Transforming ideas into reality.
            </h3>
            <p className="max-w-xl text-sm text-slate-400 sm:text-base">
              Smooth motion, polished layouts, and vibrant interactions designed
              to keep your audience engaged.
            </p>
          </div>

          <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_70px_-30px_rgba(99,102,241,0.4)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Reach out
            </p>
            <a
              href="mailto:info@codevertex.com"
              className="mt-5 inline-flex w-full items-center justify-center rounded-3xl bg-linear-to-r from-primary-purple to-secondary-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-purple/20 transition duration-300 hover:scale-105"
            >
              Email Us
            </a>
            <button className="mt-4 w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-secondary-blue/40 hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Code Vertex. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#home" className="hover:text-white">
                Home
              </a>
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#domains" className="hover:text-white">
                Domains
              </a>
              <a href="#reviews" className="hover:text-white">
                Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
