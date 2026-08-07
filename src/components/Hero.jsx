import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center"
    >
      {/* <img
        src="/images/hero.jpg"
        alt="Printing"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}

      <div className="absolute inset-0 bg-secondary/70"></div>

      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-3xl text-white"
        >

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">

            Professional Printing

            <span className="block text-blue-300">

              That Builds Brands

            </span>

          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-200">

            From business cards to large format banners,
            we deliver premium quality printing with
            fast turnaround and affordable prices.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="contact"
              smooth
              duration={500}
              className="btn btn-primary cursor-pointer"
            >
              Request Quote
            </Link>

            <Link
              to="services"
              smooth
              duration={500}
              className="btn btn-outline border-white text-white hover:border-primary"
            >
              Explore Services
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;