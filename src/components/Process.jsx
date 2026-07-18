// import React from 'react';

const Process = () => {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-24 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Our Development Process
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          We transform ideas into powerful digital products through a structured
          process.
        </p>
      </div>

      {/* Orbit System Viewport - Fully Responsive Sizes */}
      <div className="relative w-72 h-72 sm:w-110 sm:h-110 md:w-132 md:h-132 lg:w-145 lg:h-145 mx-auto flex items-center justify-center my-12 sm:my-16 scale-90 sm:scale-100">
        
        {/* Core Center Orb */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-linear-to-r from-primary-purple to-secondary-blue flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-[0_0_40px_rgba(99,102,241,0.6)] z-20">
          Core
        </div>

        {/* Orbit Line 1 (Clockwise) - Discover & Planning */}
        <div
          className="absolute w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 border border-dashed border-white/10 rounded-full z-10"
          style={{ animation: "spinClockwise 15s linear infinite" }}
        >
          {/* Inner div has reverse rotation animation to keep the text straight/readable */}
          <div className="absolute -top-5 sm:-top-8 left-1/2 -translate-x-1/2 w-20 h-10 sm:w-28 sm:h-14 bg-gradient-to-r from-purple-900 to-indigo-800 text-white font-black text-[9px] sm:text-[11px] uppercase tracking-widest rounded-full flex items-center justify-center text-center px-1 shadow-[0_0_15px_rgba(147,51,234,0.4)] border border-purple-500/30"
               style={{ animation: "spinCounterClockwise 15s linear infinite" }}>
            Planning
          </div>
        </div>

        {/* Orbit Line 2 (Counter-Clockwise) - UI / UX Design */}
        <div
          className="absolute w-[210px] h-[210px] sm:w-[310px] sm:h-[310px] md:w-[360px] md:h-[360px] border border-dashed border-white/10 rounded-full z-10"
          style={{ animation: "spinCounterClockwise 20s linear infinite" }}
        >
          <div className="absolute -top-5 sm:-top-8 left-1/2 -translate-x-1/2 w-20 h-10 sm:w-28 sm:h-14 bg-gradient-to-r from-blue-900 to-cyan-800 text-white font-black text-[9px] sm:text-[11px] uppercase tracking-widest rounded-full flex items-center justify-center text-center px-1 shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-500/30"
               style={{ animation: "spinClockwise 20s linear infinite" }}>
            UI / UX
          </div>
        </div>

        {/* Orbit Line 3 (Clockwise) - Development */}
        <div
          className="absolute w-[280px] h-[280px] sm:w-[410px] sm:h-[410px] md:w-[480px] md:h-[480px] border border-dashed border-white/10 rounded-full z-10"
          style={{ animation: "spinClockwise 25s linear infinite" }}
        >
          <div className="absolute -top-5 sm:-top-8 left-1/2 -translate-x-1/2 w-20 h-10 sm:w-28 sm:h-14 bg-gradient-to-r from-emerald-950 to-teal-800 text-white font-black text-[9px] sm:text-[11px] uppercase tracking-widest rounded-full flex items-center justify-center text-center px-1 shadow-[0_0_15px_rgba(16,185,129,0.4)] border border-emerald-500/30"
               style={{ animation: "spinCounterClockwise 25s linear infinite" }}>
            Develop
          </div>
        </div>

        {/* Orbit Line 4 (Counter-Clockwise) - Launch & Support */}
        <div
          className="absolute w-[350px] h-[350px] sm:w-[510px] sm:h-[510px] md:w-[600px] md:h-[600px] border border-dashed border-white/10 rounded-full z-10"
          style={{ animation: "spinCounterClockwise 30s linear infinite" }}
        >
          <div className="absolute -top-5 sm:-top-8 left-1/2 -translate-x-1/2 w-20 h-10 sm:w-28 sm:h-14 bg-gradient-to-r from-orange-600 via-amber-600 to-amber-500 text-white font-black text-[9px] sm:text-[11px] uppercase tracking-widest rounded-full flex items-center justify-center text-center px-1 shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-orange-400/30"
               style={{ animation: "spinClockwise 30s linear infinite" }}>
            Launch
          </div>
        </div>
      </div>

      {/* CSS Keyframes for Both Base Orbit and Self-Correcting Text Rotation */}
      <style>{`
        @keyframes spinClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinCounterClockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>

      {/* Responsive Labels below the layout with Top Spacing */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-16 text-center text-sm sm:text-base">
        <div className="bg-card-bg/50 p-4 rounded-xl border border-white/5">
          <span className="text-primary-purple block font-bold mb-1">01</span>{" "}
          Discover & Planning
        </div>
        <div className="bg-card-bg/50 p-4 rounded-xl border border-white/5">
          <span className="text-secondary-blue block font-bold mb-1">02</span>{" "}
          UI / UX Design
        </div>
        <div className="bg-card-bg/50 p-4 rounded-xl border border-white/5">
          <span className="text-primary-purple block font-bold mb-1">03</span>{" "}
          Development
        </div>
        <div className="bg-card-bg/50 p-4 rounded-xl border border-white/5">
          <span className="text-secondary-blue block font-bold mb-1">04</span>{" "}
          Launch & Support
        </div>
      </div>
    </section>
  );
};

export default Process;