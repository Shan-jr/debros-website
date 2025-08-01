// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden text-center text-white sm:px-6 lg:px-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        We Design, Build & Deliver Exceptional Exhibition Stands- Jins Jose
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="max-w-3xl mb-10 text-base sm:text-lg md:text-xl"
      >
        Your partner for turnkey exhibition solutions that create lasting impressions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 font-semibold transition rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 hover:brightness-110"
        >
          View Our Work
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 font-semibold transition border-2 border-white rounded-lg hover:bg-white hover:text-indigo-900"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
}
