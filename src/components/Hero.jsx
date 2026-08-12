import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[var(--navy-deep)]"
    >
      {/* =========================
          LEFT BACKGROUND
      ========================== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)] via-[var(--navy)] to-[var(--navy-surface)]" />

      {/* Orange glow */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-96
          h-96
          rounded-full
          bg-[var(--orange)]/10
          blur-3xl
        "
      />

      {/* Cyan glow */}
      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-[var(--cyan)]/10
          blur-3xl
        "
      />

      {/* =========================
          RIGHT IMAGE
      ========================== */}
      <div
        className="
          absolute
          top-0
          right-0
          w-full
          lg:w-[58%]
          h-full
          overflow-hidden
        "
      >
        

        {/* Dark image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[var(--navy-deep)]/30
          "
        />
      </div>

      {/* =========================
          DIAGONAL DIVIDE
      ========================== */}
      <div
        className="
          hidden
          lg:block
          absolute
          top-0
          bottom-0
          left-[42%]
          w-[18%]
          bg-[var(--navy-deep)]
          -skew-x-[12deg]
          origin-top
          z-[1]
        "
      />

      {/* =========================
          CONTENT
      ========================== */}
      <div
        className="
          container
          mx-auto
          px-4
          relative
          z-10
          min-h-screen
          flex
          items-center
          pt-28
          pb-20
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            max-w-3xl
            lg:max-w-2xl
            text-[var(--off-white)]
          "
        >
          {/* Small label */}
          <div className="mb-6">
            <span
              className="
                inline-block
                px-4
                py-2
                rounded-full
                border
                border-[var(--orange)]/40
                bg-[var(--orange)]/10
                text-[var(--orange)]
                text-sm
                font-semibold
                tracking-wide
              "
            >
              PRINT • DESIGN • BRAND
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-tight
              tracking-tight
            "
          >
            Professional Printing

            <span className="block text-[var(--cyan)]">
              That Builds Brands
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              text-lg
              md:text-xl
              leading-relaxed
              text-[var(--off-white-dim)]
              max-w-2xl
            "
          >
            From business cards to large format banners,
            we deliver premium quality printing with
            fast turnaround and affordable prices.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            {/* Primary CTA */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="
                inline-flex
                items-center
                justify-center
                px-7
                py-3.5
                rounded-lg
                bg-[var(--orange)]
                text-[var(--navy-deep)]
                font-bold
                cursor-pointer
                shadow-lg
                shadow-[var(--orange)]/20
                hover:bg-[var(--orange-dim)]
                hover:text-[var(--off-white)]
                transition-all
                duration-300
              "
            >
              Request Quote
            </Link>

            {/* Secondary CTA */}
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="
                inline-flex
                items-center
                justify-center
                px-7
                py-3.5
                rounded-lg
                border-2
                border-[var(--cyan)]
                text-[var(--cyan)]
                font-bold
                cursor-pointer
                hover:bg-[var(--cyan)]
                hover:text-[var(--navy-deep)]
                transition-all
                duration-300
              "
            >
              Explore Services
            </Link>

          </div>
        </motion.div>
      </div>

      {/* =========================
          MOBILE IMAGE
      ========================== */}
      <div
        className="
          lg:hidden
          absolute
          bottom-0
          left-0
          w-full
          h-48
          overflow-hidden
        "
      >
        <img
          src="/images/hero-printing.jpg"
          alt="Koloshan printing services"
          className="w-full h-full object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[var(--navy-deep)]
            via-[var(--navy-deep)]/50
            to-transparent
          "
        />
      </div>

      {/* =========================
          BOTTOM ACCENT
      ========================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-1
          bg-gradient-to-r
          from-[var(--orange)]
          via-[var(--cyan)]
          to-[var(--orange)]
          z-20
        "
      />
    </section>
  );
}

export default Hero;