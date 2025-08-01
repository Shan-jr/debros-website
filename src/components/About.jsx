// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-4 py-16 text-center text-white bg-gray-900 md:py-24 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 text-3xl font-semibold sm:text-4xl"
      >
        Who We Are
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-base text-gray-300 sm:text-lg"
      >
        DeBROS is a creative exhibition stand and event management company specializing in delivering bespoke solutions that help brands stand out.
        We combine innovative design, quality fabrication, and seamless project management to create memorable event experiences.
      </motion.p>
    </section>
  );
}
