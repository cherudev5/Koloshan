import { motion } from "framer-motion";
import { FaWhatsapp, FaPaintBrush } from "react-icons/fa";

function ProductCard({ product, onCustomise }) {
  const whatsappNumber = "254704551829";

  const handleOrder = () => {
    const message = `Hello Koloshan,

I would like to order the following product:

Product: ${product.name}
Quantity: 1

Please confirm availability, pricing and delivery details.

Thank you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        border border-[var(--navy-line)]
        shadow-sm
        transition-all
        duration-300
      "
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(13, 33, 54, 0.15)",
      }}
    >
      {/* Product Image */}
      <div className="relative h-72 overflow-hidden bg-[var(--off-white)]">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="
          absolute
          top-4
          left-4
          px-3
          py-1.5
          rounded-full
          bg-[var(--navy-deep)]
          text-[var(--off-white)]
          text-xs
          font-semibold
          uppercase
          tracking-wider
        ">
          {product.category}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-7">

        <h3 className="
          text-2xl
          font-bold
          text-[var(--navy-deep)]
        ">
          {product.name}
        </h3>

        <p className="
          mt-3
          text-[var(--navy)]
          opacity-75
          leading-7
        ">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-5">
          <span className="
            text-sm
            text-[var(--navy)]
            opacity-60
          ">
            From
          </span>

          <p className="
            text-2xl
            font-extrabold
            text-[var(--orange)]
          ">
            KES {product.price.toLocaleString()}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">

          {/* WhatsApp Order */}
          <button
            onClick={handleOrder}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              px-5
              py-3
              rounded-lg
              bg-[var(--orange)]
              text-[var(--navy-deep)]
              font-bold
              transition-all
              duration-300
              hover:bg-[var(--orange-dim)]
              hover:text-white
            "
          >
            <FaWhatsapp className="text-xl" />
            Order via WhatsApp
          </button>

          {/* Custom Branding */}
          {product.customizable && (
            <button
              onClick={() => onCustomise(product)}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-lg
                border-2
                border-[var(--navy-deep)]
                text-[var(--navy-deep)]
                font-bold
                transition-all
                duration-300
                hover:bg-[var(--navy-deep)]
                hover:text-[var(--off-white)]
              "
            >
              <FaPaintBrush />
              Customise & Order
            </button>
          )}

        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;