import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaPrint,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="section bg-lightGray"
    >
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/About.png"
              alt="About"
              className="rounded-xl shadow-card"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-widest text-primary font-semibold">

              About Us

            </span>

            <h2 className="text-4xl font-bold mt-4 text-secondary">

              Your Trusted Printing Partner

            </h2>

            <p className="mt-6 text-gray-600 leading-8">

              We specialize in delivering exceptional printing
              solutions for businesses, institutions, and
              individuals. Our experienced team combines
              creativity with cutting-edge technology to
              produce outstanding print products that
              strengthen your brand.

            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div className="text-center">
                <FaAward className="mx-auto text-4xl text-primary" />
                <h3 className="font-bold mt-3 text-3xl">4+</h3>
                <p className="text-gray-500">Years</p>
              </div>

              <div className="text-center">
                <FaUsers className="mx-auto text-4xl text-primary" />
                <h3 className="font-bold mt-3 text-3xl">100+</h3>
                <p className="text-gray-500">Clients</p>
              </div>

              <div className="text-center">
                <FaPrint className="mx-auto text-4xl text-primary" />
                <h3 className="font-bold mt-3 text-3xl">200+</h3>
                <p className="text-gray-500">Projects</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;