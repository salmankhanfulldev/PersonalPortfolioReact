// import React from 'react';

const Process = () => {
  return (
    <section id="process" className="py-20 px-6 lg:px-24 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Development Process</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">We transform ideas into powerful digital products through a structured process.</p>
      </div>

      {/* Orbit System Viewport */}
      <div className="relative w-75 h-75 sm:w-125 sm:h-125 mx-auto flex items-center justify-center">
        
        {/* Core Center Orb */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-linear-to-r from-primary-purple to-secondary-blue flex items-center justify-center text-white font-bold text-sm shadow-[0_0_40px_rgba(99,102,241,0.6)] z-20">
          Core
        </div>

        {/* Orbit Line 1 */}
        <div className="absolute w-35 h-35 sm:w-55 sm:h-66 border border-dashed border-white/10 rounded-full animate-spin-slow">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white text-black font-bold text-[10px] rounded-full flex items-center justify-center shadow-[0_0_15px_#fff]">01</div>
        </div>

        {/* Orbit Line 2 */}
        <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] border border-dashed border-white/10 rounded-full animate-spin-reverse">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary-purple text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.8)]">02</div>
        </div>

        {/* Orbit Line 3 */}
        <div className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] border border-dashed border-white/10 rounded-full animate-spin-slow">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary-blue text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.8)]">03</div>
        </div>
      </div>

      {/* Responsive Labels below the layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 text-center">
        <div className="bg-card-bg/50 p-4 rounded-xl border border-white/5"><span className="text-primary-purple block font-bold mb-1">01</span> Discover & Planning</div>
        <div className="bg-card-bg/50 p-4 rounded-xl border border-white/5"><span className="text-secondary-blue block font-bold mb-1">02</span> UI / UX Design</div>
        <div className="bg-card-bg/50 p-4 rounded-xl border border-white/5"><span className="text-primary-purple block font-bold mb-1">03</span> Development</div>
        <div className="bg-card-bg/50 p-4 rounded-xl border border-white/5"><span className="text-secondary-blue block font-bold mb-1">04</span> Launch & Support</div>
      </div>
    </section>
  );
};

export default Process;