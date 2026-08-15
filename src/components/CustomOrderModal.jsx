import { useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

function CustomOrderModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [branding, setBranding] = useState("");
  const [position, setPosition] = useState("Front");
  const [instructions, setInstructions] = useState("");

  if (!product) return null;

  const whatsappNumber = "254704551829";

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Koloshan,

I would like to request a custom branding order.

PRODUCT
Product: ${product.name}
Quantity: ${quantity}

BRANDING DETAILS
What I would like branded:
${branding}

Branding position:
${position}

Additional instructions:
${instructions || "None"}

Please provide the final quotation and advise on availability.

Thank you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        p-4
        bg-[var(--navy-deep)]/80
        backdrop-blur-sm
      "
      onClick={onClose}
    >

      <div
        className="
          relative
          w-full
          max-w-2xl
          max-h-[90vh]
          overflow-y-auto
          bg-[var(--off-white)]
          rounded-2xl
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="
          sticky
          top-0
          z-10
          flex
          items-center
          justify-between
          px-6
          py-5
          bg-[var(--navy-deep)]
        ">

          <div>
            <p className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-[var(--orange)]
              font-semibold
            ">
              Custom Order
            </p>

            <h2 className="
              mt-1
              text-xl
              md:text-2xl
              font-bold
              text-[var(--off-white)]
            ">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              text-[var(--off-white)]
              hover:bg-[var(--navy-surface)]
              transition
            "
          >
            <FaTimes />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-8 space-y-6"
        >

          {/* Product */}
          <div className="
            flex
            gap-4
            items-center
            p-4
            rounded-xl
            bg-white
            border
            border-[var(--navy-line)]
          ">

            <img
              src={product.image}
              alt={product.name}
              className="
                w-20
                h-20
                object-cover
                rounded-lg
              "
            />

            <div>
              <h3 className="
                font-bold
                text-[var(--navy-deep)]
              ">
                {product.name}
              </h3>

              <p className="
                text-sm
                text-[var(--navy)]
                opacity-70
              ">
                Starting from KES{" "}
                {product.price.toLocaleString()}
              </p>
            </div>

          </div>

          {/* Quantity */}
          <div>
            <label className="
              block
              mb-2
              font-semibold
              text-[var(--navy-deep)]
            ">
              Quantity
            </label>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number(e.target.value)))
              }
              className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-[var(--navy-line)]
                bg-white
                text-[var(--navy-deep)]
                outline-none
                focus:border-[var(--orange)]
                focus:ring-2
                focus:ring-[var(--orange)]/20
              "
            />
          </div>

          {/* Branding */}
          <div>
            <label className="
              block
              mb-2
              font-semibold
              text-[var(--navy-deep)]
            ">
              What would you like branded?
            </label>

            <textarea
              rows="3"
              required
              value={branding}
              onChange={(e) => setBranding(e.target.value)}
              placeholder="Example: Company logo and company name"
              className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-[var(--navy-line)]
                bg-white
                text-[var(--navy-deep)]
                placeholder:text-[var(--navy)]
                placeholder:opacity-50
                outline-none
                resize-none
                focus:border-[var(--orange)]
                focus:ring-2
                focus:ring-[var(--orange)]/20
              "
            />
          </div>

          {/* Position */}
          <div>
            <label className="
              block
              mb-2
              font-semibold
              text-[var(--navy-deep)]
            ">
              Preferred branding position
            </label>

            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-[var(--navy-line)]
                bg-white
                text-[var(--navy-deep)]
                outline-none
                focus:border-[var(--orange)]
              "
            >
              <option>Front</option>
              <option>Back</option>
              <option>Side</option>
              <option>Top</option>
              <option>Bottom</option>
              <option>Multiple Positions</option>
              <option>Not Sure - Please Advise</option>
            </select>
          </div>

          {/* Additional Instructions */}
          <div>
            <label className="
              block
              mb-2
              font-semibold
              text-[var(--navy-deep)]
            ">
              Additional instructions
            </label>

            <textarea
              rows="4"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Tell us anything else about your order..."
              className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-[var(--navy-line)]
                bg-white
                text-[var(--navy-deep)]
                placeholder:text-[var(--navy)]
                placeholder:opacity-50
                outline-none
                resize-none
                focus:border-[var(--orange)]
                focus:ring-2
                focus:ring-[var(--orange)]/20
              "
            />
          </div>

          {/* Information */}
          <div className="
            p-4
            rounded-lg
            bg-[var(--cyan)]/20
            border
            border-[var(--cyan)]
            text-sm
            text-[var(--navy-deep)]
          ">
            <strong>Next step:</strong> Your request will open
            WhatsApp where you can discuss the final design,
            branding method, quotation, delivery and payment
            with Koloshan.
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full
              flex
              items-center
              justify-center
              gap-3
              px-6
              py-4
              rounded-lg
              bg-[var(--orange)]
              text-[var(--navy-deep)]
              font-bold
              text-lg
              transition-all
              duration-300
              hover:bg-[var(--orange-dim)]
              hover:text-white
            "
          >
            <FaWhatsapp className="text-2xl" />
            Continue to WhatsApp
          </button>

        </form>
      </div>
    </div>
  );
}

export default CustomOrderModal;