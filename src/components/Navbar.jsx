import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-24 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wider text-white">
        SALMAN-KHAN
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-400 font-medium">
        {[
          "Home",
          "Services",
          "Technologies",
          "Domains",
          "Process",
          "Reviews",
        ].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary-purple transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="tel:+923118298343"
        className="hidden md:inline-flex items-center justify-center bg-linear-to-r from-primary-purple to-secondary-blue text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        Contact Us
      </a>

      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-dark-bg border-b border-white/5 flex flex-col p-6 space-y-4 md:hidden animate-fadeIn">
          {[
            "Home",
            "Services",
            "Technologies",
            "Domains",
            "Process",
            "Reviews",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-primary-purple"
            >
              {item}
            </a>
          ))}
          <a
            href="tel:+923118298343"
            className="bg-linear-to-r from-primary-purple to-secondary-blue text-white py-2 rounded-full text-center"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
