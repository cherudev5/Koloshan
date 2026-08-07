import { motion } from "framer-motion";
import {
  FaClock,
  FaAward,
  FaMoneyBillWave,
  FaPalette,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaClock,
    title: "Fast Turnaround",
    description:
      "Quick production and timely delivery without compromising quality.",
  },
  {
    icon: FaAward,
    title: "Premium Quality",
    description:
      "High-resolution printing using modern equipment and premium materials.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Affordable Pricing",
    description:
      "Competitive prices with excellent value for businesses of all sizes.",
  },
  {
    icon: FaPalette,
    title: "Creative Design",
    description:
      "Professional graphic design services to make your brand stand out.",
  },
  {
    icon: FaShippingFast,
    title: "Nationwide Delivery",
    description:
      "Reliable delivery across Kenya for all print orders.",
  },
  {
    icon: FaHeadset,
    title: "Customer Support",
    description:
      "Friendly support before, during, and after every project.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container">

        <h2 className="section-title">
          Why Choose Us
        </h2>

        <p className="section-subtitle">
          We combine creativity, technology and experience to
          produce print products that make a lasting impression.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="card text-center"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-lightBlue flex items-center justify-center">
                  <Icon className="text-primary text-3xl" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-secondary">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;