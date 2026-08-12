import { useState } from "react";
import { motion } from "framer-motion";
import portfolio from "../data/portfolio";

const filters = [
  "All",
  "Branding",
  "Print",
  "Large Format",
  "Packaging",
  "Apparel",
];

function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === active);

  return (
    <section
      id="portfolio"
      className="section bg-[var(--navy-deep)]"
    >
      <div className="container">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[var(--orange)]">
            Our Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--off-white)]">
            Recent Projects
          </h2>

          <p className="mt-5 text-[var(--off-white-dim)] leading-7">
            A selection of printing, branding, packaging and apparel
            projects created for our valued clients.
          </p>

        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`
                px-5 py-2.5
                rounded-full
                font-medium
                border
                transition-all
                duration-300
                ${
                  active === filter
                    ? "bg-[var(--orange)] text-[var(--navy-deep)] border-[var(--orange)]"
                    : "bg-[var(--navy-surface)] text-[var(--off-white-dim)] border-[var(--navy-line)] hover:border-[var(--orange)] hover:text-[var(--orange)]"
                }
              `}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {filtered.map((item) => (

            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-[var(--navy-surface)]
                border border-[var(--navy-line)]
                transition-all
                duration-300
                hover:border-[var(--orange)]
                hover:shadow-xl
              "
            >

              {/* Image */}
              <div className="overflow-hidden relative">

                <img
                  src={item.image}
                  alt={`${item.title} - Koloshan`}
                  className="
                    w-full
                    h-64
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[var(--navy-deep)]/0
                    group-hover:bg-[var(--navy-deep)]/40
                    transition-all
                    duration-300
                  "
                />

              </div>

              {/* Project Details */}
              <div className="p-6">

                <span
                  className="
                    inline-block
                    text-[var(--orange)]
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                  "
                >
                  {item.category}
                </span>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-[var(--off-white)]
                    group-hover:text-[var(--orange)]
                    transition-colors
                    duration-300
                  "
                >
                  {item.title}
                </h3>

                {/* Decorative line */}
                <div
                  className="
                    mt-4
                    h-1
                    w-10
                    rounded-full
                    bg-[var(--orange)]
                    transition-all
                    duration-300
                    group-hover:w-20
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;