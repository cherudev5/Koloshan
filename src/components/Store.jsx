import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaShoppingBag,
  FaWhatsapp,
} from "react-icons/fa";

import products from "../data/products";
import ProductCard from "./ProductCard";
import CustomOrderModal from "./CustomOrderModal";

const categories = [
  "All",
  "Bibles",
  "Water Bottles",
  "Flasks",
  "T-Shirts",
];

function Store() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section
      id="store"
      className="
        py-20
        md:py-28
        bg-[var(--off-white)]
      "
    >

      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-[var(--orange)]/10
            border
            border-[var(--orange)]/30
            text-[var(--orange)]
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
          ">
            <FaShoppingBag />
            Koloshan Store
          </div>

          <h2 className="
            mt-5
            text-4xl
            md:text-5xl
            font-extrabold
            text-[var(--navy-deep)]
          ">
            Branded Products.
            <span className="block text-[var(--orange)]">
              Made Your Way.
            </span>
          </h2>

          <p className="
            mt-5
            text-[var(--navy)]
            opacity-75
            text-lg
            leading-8
          ">
            Shop our selection of branded products or choose
            an item and tell us exactly how you would like
            it customised.
          </p>

        </motion.div>

        {/* Ordering information */}
        <div className="
          max-w-4xl
          mx-auto
          mt-10
          p-5
          md:p-6
          rounded-2xl
          bg-[var(--navy-deep)]
          text-[var(--off-white)]
          text-center
        ">

          <div className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-3
          ">

            <FaWhatsapp className="
              text-3xl
              text-[var(--cyan)]
            " />

            <p className="leading-7">
              <strong className="text-[var(--orange)]">
                Easy ordering:
              </strong>{" "}
              Select your product and continue the order
              directly on WhatsApp. We will confirm your
              quotation, branding details, payment and delivery.
            </p>

          </div>

        </div>

        {/* Category Filters */}
        <div className="
          flex
          flex-wrap
          justify-center
          gap-3
          mt-12
        ">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5
                py-2.5
                rounded-full
                font-semibold
                text-sm
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? "bg-[var(--orange)] text-[var(--navy-deep)]"
                    : "bg-white text-[var(--navy-deep)] border border-[var(--navy-line)] hover:border-[var(--orange)] hover:text-[var(--orange)]"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Products */}
        <motion.div
          layout
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-7
            mt-14
          "
        >

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCustomise={setSelectedProduct}
            />
          ))}

        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="
            text-center
            py-20
            text-[var(--navy)]
          ">
            No products found in this category.
          </div>
        )}

      </div>

      {/* Customisation Modal */}
      {selectedProduct && (
        <CustomOrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </section>
  );
}

export default Store;