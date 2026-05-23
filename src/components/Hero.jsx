import { useEffect, useState } from "react";
import HeroImage from "../assets/Images/hero.png";

const roles = [
  "Software Engineer",
  "Full Stack Developer", // Updated from "5 Stack" to prevent text reflow issues
  "Web Developer",
  "Frontend Developer",
  "Mern Stack Developer",
];

const Hero = () => {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-28 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden"
    >
      <div className="flex-1 space-y-3 text-center lg:text-left z-10">
        {/* Main Heading with dynamic text role - Adjusted spacing */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          I am a{" "}
          <span className="block min-h-[1.2em] text-transparent bg-clip-text bg-linear-to-r from-primary-purple to-secondary-blue transition-all duration-300 ease-in-out">
            {roles[activeRole]}
          </span>
        </h1>

        {/* Adjusting margin-top and line-height for paragraph spacing */}
        <p className="mt-0 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Forward-thinking Software Engineer with a Strong Background in
          Computer Science from Khushal Khan Khattak University. Fluent in MERN
          Stack (MongoDB, Express.js, React, Node.js), Next, Nest, HTML, CSS,
          JavaScript, TypeScript, JQuery, Tailwind CSS, Bootstrap, Context-APIs,
          Redux-Toolkit, React-Native. Adept at using JavaScript, Java and other
          programming languages to produce clean code. Dedicated to improving
          skills through hands-on learning and development work. Proficient in
          mobile and desktop development.
        </p>

        {/* Action Buttons: Email, Call, and Download CV */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
          <a
            href="mailto:salmankhan737400@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold px-6 py-3 hover:bg-white/5 transition-colors duration-300"
          >
            {/* <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M2 4.75A2.75 2.75 0 0 1 4.75 2h14.5A2.75 2.75 0 0 1 22 4.75v14.5A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25V4.75Zm2.25-.25v.13l7.12 5.65a1 1 0 0 0 1.26 0L19.75 4.63V4.5H4.25Zm0 15.75h15.5V7.05L11.58 12.5a3 3 0 0 1-3.16 0L4.25 19.5Z" />
            </svg> */}
           salmankhan737400@gmail.com
          </a>

          <a
            href="tel:03118298343"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold px-6 py-3 hover:bg-white/5 transition-colors duration-300"
          >
            {/* <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.08-.21c1.2.48 2.5.74 3.85.74a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C9.39 22 2 14.61 2 5.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.26 2.65.74 3.85a1 1 0 0 1-.21 1.08l-2.2 2.2Z" />
            </svg> */}
            0311 829 8343
          </a>

          <a
            href="/resume.pdf"
            download="Salman_Khan_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-primary-purple/40 bg-primary-purple/10 text-white font-semibold px-6 py-3 hover:bg-primary-purple/20 transition-colors duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M4 3h10l6 6v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm9 1.5V9h4.5L13 4.5ZM9 13h6v2H9v-2Zm0 4h6v2H9v-2Z" />
            </svg>
            Download CV
          </a>
        </div>

        {/* GitHub, LinkedIn, and Corrected TikTok Social Icons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 border-t border-white/5 max-w-sm mx-auto lg:mx-0">
          <a
            href="https://github.com/salmankhanfulldev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-slate-900/80 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-primary-purple/50 transition-all duration-300 shadow-sm shadow-primary-purple/5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.287-.01-1.047-.016-2.055-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.431.372.815 1.102.815 2.222 0 1.606-.015 2.902-.015 3.297 0 .322.216.699.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/salman-khan-2a1849268"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-slate-900/80 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-primary-purple/50 transition-all duration-300 shadow-sm shadow-primary-purple/5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
              aria-hidden="true"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.56v13H.22v-13zm6.56 0h4.37v1.77h.06c.61-1.16 2.09-2.38 4.3-2.38 4.6 0 5.45 3.02 5.45 6.94v7.67H16.5v-6.8c0-1.62-.03-3.71-2.26-3.71-2.26 0-2.6 1.76-2.6 3.58v6.93H6.78v-13z" />
            </svg>
          </a>
          {/* TikTok Link and Icon Size Fixed */}
          <a
            href="https://www.tiktok.com/@salman.khan36856"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-slate-900/80 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-primary-purple/50 transition-all duration-300 shadow-sm shadow-primary-purple/5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
              aria-hidden="true"
            >
              <path d="M12.525.02c1.31 0 2.572.33 3.694.954.06.03.11.083.132.15.03.09.015.19-.044.267a9.351 9.351 0 0 1-3.153 2.52c-.118.06-.263.022-.338-.088a5.21 5.21 0 0 0-3.321-2.185.234.234 0 0 0-.27.23v12.274a3.385 3.385 0 0 1-3.385 3.385 3.385 3.385 0 0 1-3.385-3.385 3.385 3.385 0 0 1 3.385-3.386c.277 0 .546.033.805.097.103.025.176.117.176.224v2.45a.233.233 0 0 1-.295.226 1.135 1.135 0 0 0-.686-.11 1.144 1.144 0 0 0-.962 1.135 1.144 1.144 0 0 0 1.144 1.144 1.144 1.144 0 0 0 1.144-1.144V0h3.693z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="flex-1 flex justify-center items-center w-full max-w-lg lg:max-w-xl">
        <div className="relative w-full flex justify-center items-center scale-105 sm:scale-110 lg:scale-115 transition-transform duration-500">
          <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-primary-purple/10 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-secondary-blue/15 blur-3xl" />

          <img
            src={HeroImage}
            alt="Hero"
            className="relative h-auto max-h-[500px] w-full max-w-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;