import { useState } from "react";

const reviews = [
  {
    name: "Ehsan Ullah",
    role: "Full-Stack Developer (Former Colleague at Saglinks)",
   text: "Salman Khan is an outstanding frontend developer who brings incredible energy and deep MERN stack expertise to the team. Having worked together at Saglinks, I've seen firsthand his ability to turn complex UI designs into flawless, pixel-perfect code.",
  },
  {
    name: "Muhammad Shahzaib",
    role: "Frontend Developer (Aman Integrated Solutions Pvt Ltd)",
   text: "Salman is an absolute asset to any development team. His exceptional frontend skills and dedication were key factors in helping us scale our e-commerce platform smoothly and efficiently.",
  },
  {
    name: "Muhammad Haris",
    role: "Frontend Developer React-Native (Codify Pvt Ltd)",
  text: "Salman Khan is a brilliant developer with a solid understanding of modern web architecture. His ability to simplify complex dashboard logic and build robust SaaS structures is truly top-tier.",
  },
];

const Reviews = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="reviews"
      className="py-20 px-6 lg:px-24 bg-black/20 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
        Customer Voices
      </h2>
      <div className="max-w-3xl mx-auto bg-card-bg border border-white/5 p-8 sm:p-12 rounded-3xl relative">
        <p className="text-gray-300 text-lg sm:text-xl italic leading-relaxed mb-6">
          "{reviews[active].text}"
        </p>
        <h4 className="text-white font-bold text-base">
          {reviews[active].name}
        </h4>
        <span className="text-gray-500 text-xs">{reviews[active].role}</span>

        <div className="flex justify-center space-x-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${active === i ? "bg-primary-purple w-6" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
