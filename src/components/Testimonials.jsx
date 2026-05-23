import { useState } from 'react';

const reviews = [
  { name: "Amelia Roberts", role: "Founder of Beverly Clothing", text: "Bitsbuffer helped us scale our e-commerce business faster than we imagined. Highly recommend their expertise!" },
  { name: "Rohit Sharma", role: "CTO at Nexus Digital", text: "We were struggling with complex dashboards until their SaaS development stepped in. Top-tier architecture." }
];

const Reviews = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-20 px-6 lg:px-24 bg-black/20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Customer Voices</h2>
      <div className="max-w-3xl mx-auto bg-card-bg border border-white/5 p-8 sm:p-12 rounded-3xl relative">
        <p className="text-gray-300 text-lg sm:text-xl italic leading-relaxed mb-6">"{reviews[active].text}"</p>
        <h4 className="text-white font-bold text-base">{reviews[active].name}</h4>
        <span className="text-gray-500 text-xs">{reviews[active].role}</span>
        
        <div className="flex justify-center space-x-2 mt-8">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${active === i ? 'bg-primary-purple w-6' : 'bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;