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
    accent: "orange",
  },
  {
    icon: FaAward,
    title: "Premium Quality",
    description:
      "High-resolution printing using modern equipment and premium materials.",
    accent: "cyan",
  },
  {
    icon: FaMoneyBillWave,
    title: "Affordable Pricing",
    description:
      "Competitive prices with excellent value for businesses of all sizes.",
    accent: "orange",
  },
  {
    icon: FaPalette,
    title: "Creative Design",
    description:
      "Professional graphic design services to make your brand stand out.",
    accent: "cyan",
  },
  {
    icon: FaShippingFast,
    title: "Nationwide Delivery",
    description:
      "Reliable delivery across Kenya for all print orders.",
    accent: "orange",
  },
  {
    icon: FaHeadset,
    title: "Customer Support",
    description:
      "Friendly support before, during, and after every project.",
    accent: "cyan",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 bg-[#152f47] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div
        className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-96
          h-96
          rounded-full
          bg-[#7de0db]/5
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-96
          h-96
          rounded-full
          bg-[#ff8c42]/5
          blur-3xl
        "
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className="
              uppercase
              tracking-[0.25em]
              text-[#ff8c42]
              font-semibold
              text-sm
            "
          >
            Why Koloshan
          </span>

          <h2
            className="
              mt-4
              text-4xl
              lg:text-5xl
              font-bold
              text-[#f4f1eb]
            "
          >
            Why Choose Us?
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-[#c7d2db]
            "
          >
            We combine creativity, technology and experience
            to produce print products that make a lasting
            impression.
          </p>
        </motion.div>

        {/* Reasons */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            mt-14
          "
        >
          {reasons.map((item, index) => {
            const Icon = item.icon;

            const isOrange = item.accent === "orange";

            return (
              <motion.div
                key={index}
                className="
                  group
                  relative
                  p-8
                  rounded-2xl
                  bg-[#1b3a55]
                  border
                  border-[#2a4a68]
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
              >

                {/* Top accent */}
                <div
                  className={`
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-16
                    h-1
                    rounded-b-full
                    ${
                      isOrange
                        ? "bg-[#ff8c42]"
                        : "bg-[#7de0db]"
                    }
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    w-16
                    h-16
                    mx-auto
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ${
                      isOrange
                        ? "bg-[#ff8c42]/10 group-hover:bg-[#ff8c42]"
                        : "bg-[#7de0db]/10 group-hover:bg-[#7de0db]"
                    }
                  `}
                >
                  <Icon
                    className={`
                      text-3xl
                      transition-colors
                      duration-300
                      ${
                        isOrange
                          ? "text-[#ff8c42] group-hover:text-[#0d2136]"
                          : "text-[#7de0db] group-hover:text-[#0d2136]"
                      }
                    `}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-[#f4f1eb]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-[#c7d2db]
                    leading-7
                  "
                >
                  {item.description}
                </p>

              </motion.div>
            );
          })}
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

export default WhyChooseUs;