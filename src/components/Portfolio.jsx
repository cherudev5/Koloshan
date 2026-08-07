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
      className="section bg-white"
    >
      <div className="container">

        <h2 className="section-title">

          Recent Projects

        </h2>

        <p className="section-subtitle">

          A selection of printing and branding projects
          completed for our valued clients.

        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full font-medium transition
              ${
                active === filter
                  ? "bg-primary text-white"
                  : "bg-lightGray hover:bg-primary hover:text-white"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {filtered.map((item) => (

            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: .95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-xl shadow-card bg-white"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-6">

                <span className="text-primary text-sm font-semibold uppercase">

                  {item.category}

                </span>

                <h3 className="mt-2 text-xl font-bold text-secondary">

                  {item.title}

                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;