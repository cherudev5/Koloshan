import { motion } from "framer-motion";
import services from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="section bg-lightGray"
    >
      <div className="container">

        <h2 className="section-title">
          Our Services
        </h2>

        <p className="section-subtitle">
          Comprehensive printing and branding solutions tailored
          to your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >

                <div className="w-16 h-16 rounded-full bg-lightBlue flex items-center justify-center">

                  <Icon className="text-primary text-3xl" />

                </div>

                <h3 className="mt-6 text-xl font-bold text-secondary">

                  {service.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-7">

                  {service.description}

                </p>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;