import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-black text-white px-4 py-3 md:px-6 md:py-4 flex items-center justify-between relative z-50 sticky top-0">
      {/* Logo and Branding */}
      <div className="flex items-center gap-3">
        <img
          src="/logonav.avif"
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-110"
        />
        <span className="text-xl md:text-2xl font-semibold text-yellow-400">
          Happiness Plans
        </span>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-yellow-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 md:gap-8 text-white font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              onClick={() => setActiveTab(item.name.toLowerCase())}
              className={`transition-colors duration-300 hover:text-yellow-400 ${
                activeTab === item.name.toLowerCase()
                  ? "text-yellow-400 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black text-white shadow-lg md:hidden">
          <ul className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => {
                    setActiveTab(item.name.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className={`block py-2 px-4 rounded hover:bg-yellow-100 hover:text-black transition-colors duration-300 ${
                    activeTab === item.name.toLowerCase()
                      ? "text-yellow-400 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
