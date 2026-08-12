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
      className="py-24 bg-[#0d2136] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-96
          h-96
          rounded-full
          bg-[#ff8c42]/5
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-[#7de0db]/5
          blur-3xl
        "
      />

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">

              <img
                src="/images/About.png"
                alt="Koloshan printing services"
                className="
                  w-full
                  rounded-2xl
                  shadow-2xl
                  object-cover
                "
              />

              {/* Image accent */}
              <div
                className="
                  absolute
                  -bottom-5
                  -right-5
                  w-28
                  h-28
                  border-4
                  border-[#ff8c42]
                  rounded-xl
                  -z-10
                "
              />

              <div
                className="
                  absolute
                  -top-5
                  -left-5
                  w-20
                  h-20
                  bg-[#7de0db]/20
                  rounded-xl
                  -z-10
                "
              />

            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Section label */}
            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[#ff8c42]
                font-semibold
                text-sm
              "
            >
              About Us
            </span>

            {/* Heading */}
            <h2
              className="
                text-4xl
                lg:text-5xl
                font-bold
                mt-4
                text-[#f4f1eb]
                leading-tight
              "
            >
              Your Trusted
              <span className="block text-[#7de0db]">
                Printing Partner
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                text-[#c7d2db]
                leading-8
                text-lg
              "
            >
              We specialize in delivering exceptional printing
              solutions for businesses, institutions, and
              individuals. Our experienced team combines
              creativity with cutting-edge technology to
              produce outstanding print products that
              strengthen your brand.
            </p>

            <p
              className="
                mt-4
                text-[#c7d2db]
                leading-8
              "
            >
              At Koloshan, we believe that every printed piece
              represents your brand. That's why we focus on
              quality, attention to detail, and reliable
              turnaround times on every project.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-10">

              {/* Years */}
              <div
                className="
                  text-center
                  p-5
                  rounded-xl
                  bg-[#152f47]
                  border
                  border-[#2a4a68]
                  hover:border-[#ff8c42]
                  transition-all
                  duration-300
                "
              >
                <FaAward
                  className="
                    mx-auto
                    text-3xl
                    text-[#ff8c42]
                  "
                />

                <h3
                  className="
                    font-bold
                    mt-3
                    text-3xl
                    text-[#f4f1eb]
                  "
                >
                  4+
                </h3>

                <p className="text-[#c7d2db] mt-1">
                  Years
                </p>
              </div>

              {/* Clients */}
              <div
                className="
                  text-center
                  p-5
                  rounded-xl
                  bg-[#152f47]
                  border
                  border-[#2a4a68]
                  hover:border-[#7de0db]
                  transition-all
                  duration-300
                "
              >
                <FaUsers
                  className="
                    mx-auto
                    text-3xl
                    text-[#7de0db]
                  "
                />

                <h3
                  className="
                    font-bold
                    mt-3
                    text-3xl
                    text-[#f4f1eb]
                  "
                >
                  100+
                </h3>

                <p className="text-[#c7d2db] mt-1">
                  Clients
                </p>
              </div>

              {/* Projects */}
              <div
                className="
                  text-center
                  p-5
                  rounded-xl
                  bg-[#152f47]
                  border
                  border-[#2a4a68]
                  hover:border-[#ff8c42]
                  transition-all
                  duration-300
                "
              >
                <FaPrint
                  className="
                    mx-auto
                    text-3xl
                    text-[#ff8c42]
                  "
                />

                <h3
                  className="
                    font-bold
                    mt-3
                    text-3xl
                    text-[#f4f1eb]
                  "
                >
                  200+
                </h3>

                <p className="text-[#c7d2db] mt-1">
                  Projects
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom divider */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-px
          bg-[#2a4a68]
        "
      />

    </section>
  );
}

export default About;