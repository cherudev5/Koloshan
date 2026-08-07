import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "home",
    "about",
    "services",
    "portfolio",
    "testimonials",
    "contact",
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        sticky
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center">

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-3"
        >
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h2 className="font-bold text-2xl text-secondary">
              Koloshan
            </h2>

            <p className="text-sm text-primary">
              Your Brand Matters
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8">

          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer capitalize font-medium text-text hover:text-primary transition"
            >
              {item}
            </Link>
          ))}

        </nav>

        <button
          className="md:hidden text-2xl text-secondary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">

          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b capitalize cursor-pointer hover:bg-lightBlue"
            >
              {item}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
}

export default Navbar;