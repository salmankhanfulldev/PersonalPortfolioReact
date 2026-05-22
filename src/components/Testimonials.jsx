// Testimonials.jsx
import  { useState } from 'react';

const reviews = [
  { name: "Amelia Roberts", role: "Founder of Beverly Clothing", text: "Bitsbuffer helped us scale our e-commerce business faster than we imagined. Highly recommend their expertise!" },
  { name: "Rohit Sharma", role: "CTO at Nexus Digital", text: "We were struggling with complex dashboards until their SaaS development stepped in. Top-tier architecture." },
  { name: "Muhammad Kaleem", role: "Director of EduVerse", text: "We partnered with them for our educational platform. The result was a robust EdTech solution with smooth UI." }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="testimonials" id="reviews">
      <h2>Customer Voices</h2>
      <div className="testimonial-card">
        <p>"{reviews[current].text}"</p>
        <h4>{reviews[current].name}</h4>
        <span>{reviews[current].role}</span>
      </div>
      <div className="carousel-dots">
        {reviews.map((_, index) => (
          <span key={index} className={index === current ? "dot active" : "dot"} onClick={() => setCurrent(index)} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;