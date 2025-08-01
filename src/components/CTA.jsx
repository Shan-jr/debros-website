// src/components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="px-4 py-16 text-center text-white bg-red-600 md:py-24 md:px-20">
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 text-3xl font-semibold"
      >
        Let’s Create Something Amazing
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="mb-8 text-lg"
      >
        Talk to our team to kickstart your next project.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 font-semibold text-red-600 transition bg-white rounded-xl hover:bg-gray-100"
      >
        Contact Us
      </motion.button>
    </section>
  );
}
