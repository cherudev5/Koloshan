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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "home",
    "about",
    "services",
    "store",
    "portfolio",
    "testimonials",
    "contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky
          ? "bg-[var(--off-white)]/95 backdrop-blur-md shadow-lg py-2"
          : "bg-[var(--off-white)]/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-3"
        >
          <img
            src="/images/KoloshanLogo.png"
            alt="Koloshan Enterprise Logo"
            className="w-20 h-11 md:w-12 md:h-12 object-contain rounded-md"
          />

          <div className="leading-tight">
            <h2 className="font-bold leading-none flex items-baseline gap-2">
  <span className="text-2xl md:text-3xl tracking-tight text-[var(--orange)]">
    Koloshan
  </span>

  <span className="text-sm md:text-base font-medium tracking-wide text-[var(--navy)]">
    Enterprises
  </span>
</h2>

<p className="text-xs text-[var(--navy)]/70 mt-1">
  Your Brand Matters
</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              offset={-80}
              duration={500}
              className="
                relative
                cursor-pointer
                capitalize
                font-medium
                text-offWhiteDim
                hover:text-orange
                transition-colors
                duration-300
                group
              "
            >
              {item}

              {/* Hover underline */}
              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-0.5
                  bg-orange
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="
            md:hidden
            text-2xl
            text-offWhite
            hover:text-orange
            transition-colors
            duration-300
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="bg-navy border-t border-navyLine shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="
                block
                px-6
                py-4
                border-b
                border-navyLine
                capitalize
                cursor-pointer
                text-offWhiteDim
                hover:text-orange
                hover:bg-navySurface
                transition-all
                duration-300
              "
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;