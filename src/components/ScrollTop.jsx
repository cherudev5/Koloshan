import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShow(window.scrollY > 400);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

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
      className="fixed bottom-28 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-xl hover:bg-secondary transition z-50 flex items-center justify-center"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollTop;