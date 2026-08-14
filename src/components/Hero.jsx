import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";

import heroMedia from "../data/heroSlides";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const currentMedia = heroMedia[currentSlide];

  /*
   * Move to next slide
   */
  const nextSlide = () => {
    setIsPlaying(false);

    setCurrentSlide((prev) =>
      prev === heroMedia.length - 1 ? 0 : prev + 1
    );
  };

  /*
   * Move to previous slide
   */
  const previousSlide = () => {
    setIsPlaying(false);

    setCurrentSlide((prev) =>
      prev === 0 ? heroMedia.length - 1 : prev - 1
    );
  };

  /*
   * Go directly to a slide
   */
  const goToSlide = (index) => {
    setIsPlaying(false);
    setCurrentSlide(index);
  };

  /*
   * Automatic carousel.

   * Images automatically move every 6 seconds.

   * Videos do NOT automatically move while playing.
   */
  useEffect(() => {
    if (currentMedia.type === "video" && isPlaying) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isPlaying]);

  /*
   * Play / pause video
   */
  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  /*
   * Reset video when leaving video slide
   */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsPlaying(false);
  }, [currentSlide]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-[#0d2136]
        pt-24
        md:pt-28
      "
    >
      {/* ================================
          BACKGROUND
      ================================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2136] via-[#152f47] to-[#1b3a55]" />

      {/* Orange glow */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-72
          h-72
          md:w-96
          md:h-96
          rounded-full
          bg-[#ff8c42]/10
          blur-3xl
        "
      />

      {/* Cyan glow */}

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-72
          h-72
          md:w-96
          md:h-96
          rounded-full
          bg-[#7de0db]/10
          blur-3xl
        "
      />

      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div
        className="
          container
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
          w-full
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
          "
        >
          {/* ================================
              LEFT SIDE - TEXT
          ================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#f4f1eb] order-2 lg:order-1"
          >
            {/* Label */}

            <div className="mb-5 md:mb-6">
              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  border
                  border-[#ff8c42]/40
                  bg-[#ff8c42]/10
                  text-[#ff8c42]
                  text-xs
                  sm:text-sm
                  font-semibold
                  tracking-widest
                "
              >
                PRINT • DESIGN • BRAND
              </span>
            </div>

            {/* Heading */}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentMedia.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h1
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    font-extrabold
                    leading-tight
                  "
                >
                  {currentMedia.title}

                  <span
                    className="
                      block
                      text-[#7de0db]
                      mt-1
                    "
                  >
                    {currentMedia.subtitle}
                  </span>
                </h1>

                {/* Description */}

                <p
                  className="
                    mt-6
                    md:mt-8
                    text-base
                    sm:text-lg
                    md:text-xl
                    leading-relaxed
                    text-[#c7d2db]
                    max-w-2xl
                  "
                >
                  {currentMedia.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Buttons */}

            <div
              className="
                mt-8
                md:mt-10
                flex
                flex-wrap
                gap-4
              "
            >
              {/* Primary */}

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  md:px-7
                  py-3
                  md:py-3.5
                  rounded-lg
                  bg-[#ff8c42]
                  text-[#0d2136]
                  font-bold
                  cursor-pointer
                  shadow-lg
                  shadow-[#ff8c42]/20
                  hover:bg-[#c96a2e]
                  hover:text-[#f4f1eb]
                  transition-all
                  duration-300
                "
              >
                Request Quote
              </Link>

              {/* Secondary */}

              <Link
                to="services"
                smooth={true}
                duration={500}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  md:px-7
                  py-3
                  md:py-3.5
                  rounded-lg
                  border-2
                  border-[#7de0db]
                  text-[#7de0db]
                  font-bold
                  cursor-pointer
                  hover:bg-[#7de0db]
                  hover:text-[#0d2136]
                  transition-all
                  duration-300
                "
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* ================================
              RIGHT SIDE - CAROUSEL
          ================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              relative
              order-1
              lg:order-2
              w-full
            "
          >
            {/* Carousel */}

            <div
              className="
                relative
                w-full
                aspect-[4/3]
                sm:aspect-[16/10]
                lg:aspect-[4/3]
                overflow-hidden
                rounded-[2rem]
                border
                border-[#2a4a68]
                shadow-2xl
                bg-[#152f47]
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMedia.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* ================================
                      IMAGE SLIDE
                  ================================= */}

                  {currentMedia.type === "image" && (
                    <>
                      <img
                        src={currentMedia.src}
                        alt={currentMedia.title}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                        "
                      />

                      {/* Image overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#0d2136]/80
                          via-[#0d2136]/20
                          to-transparent
                        "
                      />
                    </>
                  )}

                  {/* ================================
                      VIDEO SLIDE
                  ================================= */}

                  {currentMedia.type === "video" && (
                    <>
                      <video
                        ref={videoRef}
                        src={currentMedia.src}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                        "
                        playsInline
                        preload="metadata"
                        onEnded={() => setIsPlaying(false)}
                      />

                      {/* Video overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#0d2136]/80
                          via-transparent
                          to-[#0d2136]/20
                          pointer-events-none
                        "
                      />

                      {/* Play Button */}

                      <button
                        onClick={toggleVideo}
                        aria-label={
                          isPlaying
                            ? "Pause video"
                            : "Play laser engraving video"
                        }
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          w-16
                          h-16
                          md:w-20
                          md:h-20
                          rounded-full
                          bg-[#ff8c42]
                          text-[#0d2136]
                          flex
                          items-center
                          justify-center
                          shadow-2xl
                          hover:bg-[#c96a2e]
                          hover:text-white
                          hover:scale-110
                          transition-all
                          duration-300
                          z-20
                        "
                      >
                        {isPlaying ? (
                          <FaPause className="text-xl md:text-2xl" />
                        ) : (
                          <FaPlay className="text-xl md:text-2xl ml-1" />
                        )}
                      </button>

                      {/* Video label */}

                      <div
                        className="
                          absolute
                          bottom-5
                          left-5
                          z-10
                          px-4
                          py-2
                          rounded-lg
                          bg-[#0d2136]/80
                          backdrop-blur-sm
                          text-[#f4f1eb]
                          text-sm
                          font-semibold
                        "
                      >
                        Laser Engraving
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* ================================
                  PREVIOUS BUTTON
              ================================= */}

              <button
                onClick={previousSlide}
                aria-label="Previous slide"
                className="
                  absolute
                  left-3
                  sm:left-5
                  top-1/2
                  -translate-y-1/2
                  w-10
                  h-10
                  md:w-12
                  md:h-12
                  rounded-full
                  bg-[#0d2136]/70
                  backdrop-blur-sm
                  text-[#f4f1eb]
                  border
                  border-[#2a4a68]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#ff8c42]
                  hover:text-[#0d2136]
                  transition-all
                  duration-300
                  z-30
                "
              >
                <FaChevronLeft />
              </button>

              {/* ================================
                  NEXT BUTTON
              ================================= */}

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="
                  absolute
                  right-3
                  sm:right-5
                  top-1/2
                  -translate-y-1/2
                  w-10
                  h-10
                  md:w-12
                  md:h-12
                  rounded-full
                  bg-[#0d2136]/70
                  backdrop-blur-sm
                  text-[#f4f1eb]
                  border
                  border-[#2a4a68]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#ff8c42]
                  hover:text-[#0d2136]
                  transition-all
                  duration-300
                  z-30
                "
              >
                <FaChevronRight />
              </button>

              {/* ================================
                  DOT NAVIGATION
              ================================= */}

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  flex
                  items-center
                  gap-2
                  z-30
                "
              >
                {heroMedia.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`
                      h-2.5
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        currentSlide === index
                          ? "w-8 bg-[#ff8c42]"
                          : "w-2.5 bg-[#f4f1eb]/60 hover:bg-[#7de0db]"
                      }
                    `}
                  />
                ))}
              </div>
            </div>

            {/* Decorative frame */}

            <div
              className="
                absolute
                -bottom-3
                -right-3
                w-24
                h-24
                border-r-4
                border-b-4
                border-[#ff8c42]
                rounded-br-[2rem]
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                -top-3
                -left-3
                w-20
                h-20
                border-l-4
                border-t-4
                border-[#7de0db]
                rounded-tl-[2rem]
                pointer-events-none
              "
            />
          </motion.div>
        </div>
      </div>

      {/* ================================
          BOTTOM ACCENT
      ================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-1
          bg-gradient-to-r
          from-[#ff8c42]
          via-[#7de0db]
          to-[#ff8c42]
        "
      />
    </section>
  );
}

export default Hero;