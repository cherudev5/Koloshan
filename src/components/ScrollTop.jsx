import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      title="Back to top"
      className="
        fixed
        bottom-28
        right-6
        w-14
        h-14
        rounded-full

        bg-[var(--navy-surface)]
        text-[var(--cyan)]

        border
        border-[var(--navy-line)]

        shadow-xl

        hover:bg-[var(--orange)]
        hover:text-[var(--navy-deep)]
        hover:border-[var(--orange)]

        transition-all
        duration-300

        z-50

        flex
        items-center
        justify-center

        hover:-translate-y-1
      "
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollTop;