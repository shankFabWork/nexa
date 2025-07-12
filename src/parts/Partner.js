import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function BrandPartners({ data }) {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Brand Partners</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
          {data.map((brand, index) => (
            <motion.div
              key={brand.company_name}
              className="flex items-center justify-center p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <img
                src={brand.imageUrl}
                alt={brand.company_name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

BrandPartners.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company_name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
