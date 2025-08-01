// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Exhibition Stand Design",
    desc: "From concept to creation, we design and build bespoke exhibition stands that perfectly fit your brand identity and goals.",
  },
  {
    title: "Event Management",
    desc: "Full-service event planning and management to ensure your exhibitions run smoothly from start to finish.",
  },
  {
    title: "Graphic & Branding",
    desc: "Creative graphic design and branding services to amplify your visual presence at every event.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } },
};

export default function Services() {
  return (
    <section className="px-4 py-16 text-white md:py-24 md:px-20 bg-gray-950">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-3xl font-semibold text-center sm:text-4xl"
      >
        Our Services
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
      >
        {services.map(({ title, desc }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            className="p-8 text-center transition bg-gray-900 cursor-pointer rounded-xl hover:bg-gray-800"
          >
            <h3 className="mb-4 text-2xl font-semibold text-red-500">{title}</h3>
            <p className="text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
