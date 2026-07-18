import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-white/5 px-6 lg:px-24 py-4 flex justify-between items-center">
      {/* Brand Logo / Name */}
      <div className="text-xl font-bold tracking-wider text-white z-55">
        SALMAN KHAN
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

      {/* Desktop Contact Button */}
      <a
        href="tel:+923118298343"
        className="hidden md:inline-flex items-center justify-center bg-linear-to-r from-primary-purple to-secondary-blue text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        Contact Us
      </a>

      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none z-55"
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

      {/* Mobile Full Screen Menu with Matching Blue Scroll Effect Background */}
      {isOpen && (
        <div className="fixed inset-0 h-screen w-screen bg-linear-to-b from-dark-bg via-secondary-blue/20 to-dark-bg md:hidden animate-fadeIn z-50 px-8 pt-28 pb-12 flex flex-col justify-between backdrop-blur-lg">
          
          {/* Top Section: Links (Left Aligned) */}
          <div className="flex flex-col space-y-6 text-left w-full">
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
                className="text-2xl font-medium text-gray-300 hover:text-secondary-blue transition-colors block w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Bottom Section: Left Aligned Contact Us Button with Text-Length Width & Custom Color */}
          <div className="flex justify-start w-full">
            <a
              href="tel:+923118298343"
              className="inline-flex items-center justify-center bg-linear-to-r from-secondary-blue to-primary-purple text-white font-semibold px-8 py-3 rounded-full hover:brightness-110 active:scale-95 transition-all duration-300 text-lg bg-yellow-900"
            >
              CONTACT US
            </a>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;