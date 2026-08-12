import { Link } from "react-scroll";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[var(--navy-deep)] text-[var(--off-white)]">

      {/* Main Footer */}
      <div className="container py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Company */}
          <div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden border border-[var(--navy-line)]">
                <img
                  src="/images/KoloshanLogo.png"
                  alt="Koloshan Enterprise Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Koloshan Enterprise
                </h2>

                <p className="text-sm text-[var(--orange)] font-medium">
                  Your Brand Matters
                </p>
              </div>
            </div>

            <p className="mt-6 text-[var(--off-white-dim)] leading-8">
              Print Bold. Brand Smart.
            </p>

            <p className="mt-2 text-[var(--off-white-dim)] leading-7">
              A Nairobi-based creative hub for printing,
              branding and promotional solutions. We help
              businesses and organizations create brands
              that stand out.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254704551829"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                mt-6
                px-5
                py-3
                rounded-lg
                font-semibold
                bg-[var(--orange)]
                text-[var(--navy-deep)]
                hover:bg-[var(--orange-dim)]
                hover:text-[var(--off-white)]
                transition
              "
            >
              <FaWhatsapp className="text-xl" />
              Chat With Us
            </a>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="font-bold text-xl">
              Quick Links
            </h3>

            <div className="w-10 h-1 bg-[var(--orange)] rounded-full mt-3 mb-6"></div>

            <ul className="space-y-4">

              {navItems.map((item) => (
                <li key={item.id}>

                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="
                      text-[var(--off-white-dim)]
                      hover:text-[var(--orange)]
                      cursor-pointer
                      transition-colors
                    "
                  >
                    {item.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* Business Information */}
          <div>

            <h3 className="font-bold text-xl">
              Contact & Hours
            </h3>

            <div className="w-10 h-1 bg-[var(--orange)] rounded-full mt-3 mb-6"></div>

            {/* Phone */}
            <a
              href="tel:+254704551829"
              className="flex items-center gap-4 mb-5 group"
            >
              <FaPhoneAlt className="text-[var(--orange)]" />

              <span className="text-[var(--off-white-dim)] group-hover:text-[var(--orange)] transition">
                +254 704 551 829
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@koloshan.co.ke"
              className="flex items-center gap-4 mb-5 group"
            >
              <FaEnvelope className="text-[var(--orange)]" />

              <span className="text-[var(--off-white-dim)] group-hover:text-[var(--orange)] transition">
                info@koloshan.co.ke
              </span>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 mb-8">
              <FaMapMarkerAlt className="text-[var(--orange)]" />

              <span className="text-[var(--off-white-dim)]">
                Nairobi, Kenya
              </span>
            </div>


            {/* Hours */}
            <h4 className="font-semibold text-lg mb-3">
              Business Hours
            </h4>

            <div className="text-[var(--off-white-dim)] space-y-2">

              <div className="flex justify-between max-w-xs">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between max-w-xs">
                <span>Saturday</span>
                <span>8:00 AM - 2:00 PM</span>
              </div>

              <div className="flex justify-between max-w-xs">
                <span>Sunday</span>
                <span>Closed</span>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-[var(--navy-line)]">

        <div className="container py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-[var(--off-white-dim)] text-center md:text-left">
              © {new Date().getFullYear()} Koloshan Enterprise.
              All Rights Reserved.
            </p>

            <p className="text-sm text-[var(--off-white-dim)]">
              Print Bold.{" "}
              <span className="text-[var(--orange)]">
                Brand Smart.
              </span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;