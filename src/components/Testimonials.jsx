import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section bg-[var(--off-white)]"
    >
      <div className="container">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[var(--orange)]">
            Client Feedback
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--navy-deep)]">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-[var(--navy)]/70 leading-7">
            We are proud to have earned the trust of businesses,
            organizations and individuals across Kenya.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              className="
                group
                relative
                text-center
                rounded-2xl
                p-8
                bg-[var(--navy-surface)]
                border
                border-[var(--navy-line)]
                transition-all
                duration-300
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(13, 33, 54, 0.18)",
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              {/* Decorative Top Line */}
              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  h-1
                  w-12
                  rounded-b-full
                  bg-[var(--orange)]
                  transition-all
                  duration-300
                  group-hover:w-24
                "
              />

              {/* Client Image */}
              <img
                src={item.image}
                alt={`${item.name} - ${item.company}`}
                className="
                  w-24
                  h-24
                  rounded-full
                  object-cover
                  mx-auto
                  border-4
                  border-[var(--navy-line)]
                  group-hover:border-[var(--orange)]
                  transition-all
                  duration-300
                "
              />

              {/* Rating */}
              <div className="flex justify-center gap-1 mt-5">

                {[...Array(item.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[var(--orange)]"
                  />
                ))}

              </div>

              {/* Comment */}
              <p
                className="
                  mt-5
                  text-[var(--off-white-dim)]
                  italic
                  leading-7
                "
              >
                "{item.comment}"
              </p>

              {/* Client Name */}
              <h3
                className="
                  mt-6
                  font-bold
                  text-lg
                  text-[var(--off-white)]
                "
              >
                {item.name}
              </h3>

              {/* Company */}
              <p
                className="
                  mt-1
                  text-[var(--cyan)]
                  font-medium
                "
              >
                {item.company}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;