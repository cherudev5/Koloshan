import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section bg-lightGray"
    >
      <div className="container">

        <h2 className="section-title">
          What Our Clients Say
        </h2>

        <p className="section-subtitle">
          We are proud to have earned the trust of businesses,
          organizations and individuals across Kenya.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />

              <div className="flex justify-center gap-1 mt-5">

                {[...Array(item.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-5 text-gray-600 italic leading-7">

                "{item.comment}"

              </p>

              <h3 className="mt-6 font-bold text-secondary">

                {item.name}

              </h3>

              <p className="text-primary">

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