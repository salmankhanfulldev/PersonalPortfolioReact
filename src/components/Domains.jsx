import { ExternalLink } from "lucide-react";
import IslamabadElectronicStore from "../assets/Images/islamabad_electrionis_cover.jfif";
import worldAtls from "../assets/Images/World-Atlas.png";
import weddingpicture from "../assets/Images/wedding picture.png"
import todoapp from "../assets/Images/Todo List App.jfif"
import weatherapp from '../assets/Images/weather app.webp'
import agecalculator from "../assets/Images/agecalcuator.webp"
import coraImage from "../assets/Images/cora.jpg"
import dictionary from "../assets/Images/dictionaryapp.webp"
import sayaecommerce from "../assets/Images/saya.webp"
import expensetracker from "../assets/Images/expensetracker.webp"
import dashboard from "../assets/Images/dashboard.webp"
const DomainsData = [
  
  
  {
    title: "Planoujam Wedding Commerce  ",
    description:
      "Planuojam.lt is a comprehensive event planning platform in Lithuania designed to streamline the process of organizing weddings, corporate events, and celebrations. The platform features an interactive map layout that seamlessly connects users with top-tier event venues, professional vendors, and exclusive hot deals.",
    liveLink: "https://planuojam.lt/lt",
    githubLink: "https://github.com/salmankhanfulldev/SaglinksPlanoujam",
    image: weddingpicture,
  },
  

    {
    title: "Saya E-Commerce Website",
    description:
      "Saya e-commerce platform that provides a seamless online shopping experience.Users can browse products, manage their cart, and complete secure purchases with ease.",
      liveLink: "sayaecommercestore.netlify.app",
    githubLink: "https://github.com/salmankhanfulldev/SayaEcommerceVue",
    image: sayaecommerce,
  },
  
    {
    title: "Cora E-Commerce Website",
    description:
      "Cora is a premium e-commerce platform dedicated to providing customers with an exceptional selection of curated goods and top-tier service. Elevate your lifestyle today by exploring our diverse marketplace, designed for secure shopping and effortless browsing.",
      liveLink: "https://salmankhanfulldev.github.io/Cora-E-Commerce-Website/",
    githubLink: "https://github.com/salmankhanfulldev/Cora-E-Commerce-Website",
    image: coraImage,
  },


  {
    title: "WorldAtlas Website",
    description:
      "WorldAtlas is a modern React.js web application that provides real-time information about countries around the world through API integration. Users can explore country details including flags, population, capital cities, and other key facts with an interactive and visually appealing interface",
    liveLink: "https://worldatlas0011.netlify.app/",
    githubLink: "https://github.com/salmankhanfulldev/WorldAtlas",
    image: worldAtls, // Apni actual image ka path yahan dalein
  }
  ,
 
  
  
  {
    title: "Saglinks Company Website",
    description:
      "A modern and responsive company website developed for SAGLINKS Islamabad to showcase its services, expertise, and business information. The website features a professional design, intuitive navigation, and a user-friendly experience across all devices",
      liveLink: "https://saglinkscompywebsite.vercel.app/",
    githubLink: "https://github.com/salmankhanfulldev/Saglinks",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
  },
   {
    title: "Electronic Store",
    description:
      "This Electronic store website is built with React.js and provides a seamless shopping experience. Users can filter products add items to the cart, and place orders easily through a user-friendly interface.",
    liveLink: "https://electronice-commercestore.netlify.app/",
    githubLink: "https://github.com/salmankhanfulldev/Electronic-Store",
    image: IslamabadElectronicStore,
  },
  {
    title: "Weather App",
    description:
      "A responsive Weather App that detects the user's live location and provides real-time weather updates. It displays the current temperature, weather conditions (such as sunny, rainy, or snowy), and location details for accurate forecasts.",
    liveLink: "https://weatherapp44.netlify.app/",
    githubLink: "https://github.com/salmankhanfulldev/ReactWeatherApp",
    image: weatherapp,
  },
  {
    title: "Todo App",
    description:
      "A responsive Todo App that allows users to add, edit, and delete tasks with ease. Users can also mark completed tasks using a strike-through effect, making it simple to organize and track daily activities.",
    liveLink: "https://todomateapp3.netlify.app/",
    githubLink: "https://github.com/salmankhanfulldev/Todo-Mate-React-App",
    image: todoapp,
  },

  {
    title: "Age Calculator App",
    description:
      "A responsive Age Calculator precisely determines your age in years, months, and days based on your birthdate. It delivers an accurate, real-time breakdown of the exact time that has passed since you were born.",
    liveLink: "https://salmankhanfulldev.github.io/AgeCalculatorUsingJS/",
    githubLink: "https://github.com/salmankhanfulldev/AgeCalculatorUsingJS",
    image: agecalculator,
  },
  
  {
    title: "Expense Tracker App",
    description:
      "Built an intuitive expense tracking system that helps users manage their income and expenses efficiently.It provides real-time financial insights through categorized transactions and detailed expense reports.",
    liveLink: "https://expensivetrackingsystem.netlify.app/",
    githubLink: "https://github.com/salmankhanfulldev/Expense-Tracking-System",
    image: expensetracker,
  },
  {
    title: "Admin Dashboard Panel",
    description:
      "Built a modern admin panel with comprehensive tools for monitoring and managing application resources.The dashboard offers data visualization, user administration, and a responsive design for seamless management across devices.",
    liveLink: "https://miniadminpanel.netlify.app/",
    githubLink: "https://github.com/salmankhanfulldev/MiniAdminPanelReact",
    image: dashboard,
  },
    {
    title: " Dictionary App",
    description:
      "A responsive Dictionary app that allows users to search for words, view definitions, and explore synonyms. It provides a user-friendly interface for quick and easy access to a comprehensive collection of words and their meanings.",
    liveLink: "https://salmankhanfulldev.github.io/Dictionary-App/",
    githubLink: "https://github.com/salmankhanfulldev/Dictionary-App",
    image: dictionary,

  },
];

const Domains = () => {
  return (
    <section
      id="domains"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10"
    >
      {/* Background design remains untouched */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_55%)] blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="inline-flex rounded-full bg-primary-purple/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary-purple">
            Our Work
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            We build bold digital experiences for fast-growing businesses using
            modern product design, intelligent architecture, and polished
            motion.
          </p>
        </div>

        {/* Updated Grid Section */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {DomainsData.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 text-slate-100 shadow-[0_28px_80px_-48px_rgba(59,130,246,0.6)] transition duration-500 hover:-translate-y-1 hover:border-secondary-blue/50 hover:bg-slate-900/95 animate-fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* 1. Top Image Section */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Image bottom linear shadow overlay just like image_164e65.png */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
              </div>

              {/* 2. Content Details Container */}
              <div className="relative z-10 flex flex-1 flex-col justify-between p-5">
                <div>
                  <h4 className="text-lg font-semibold text-white sm:text-xl tracking-tight">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* 3. Footer Actions Links */}
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-secondary-blue transition-colors hover:text-white"
                  >
                    Live Demo <ExternalLink size={13} />
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider text-slate-400 transition-colors hover:text-white"
                    >
                      <span>Code</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
