import { motion } from "framer-motion";
import services from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="section bg-[var(--off-white)]"
    >
      <div className="container">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[var(--orange)]">
            What We Do
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--navy-deep)]">
            Our Services
          </h2>

          <p className="mt-5 text-[var(--navy)]/70 leading-7">
            Comprehensive printing, branding, apparel and packaging
            solutions tailored to your business, events and personal needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                className="
                group
                bg-white
                border border-[var(--navy-line)]
                hover:border-[var(--orange)]
                rounded-2xl
                p-8
                shadow-sm
                transition-all
                duration-300
                "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(13, 33, 54, 0.12)",
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >

                {/* Icon */}
                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-[var(--navy-deep)]
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-[var(--orange)]
                  "
                >
                  <Icon
                    className="
                      text-[var(--cyan)]
                      text-3xl
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-[var(--navy-deep)]
                    group-hover:text-[var(--orange)]
                    transition-colors duration-300
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-dark-muted leading-7">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div
                  className="
                    mt-6
                    h-1
                    w-10
                    rounded-full
                    bg-[var(--orange)]
                    transition-all duration-300
                    group-hover:w-20
                  "
                />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Services;