// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="text-white bg-gray-950">
      <Hero />
      <About />
      <Services />
      <CTA />
    </div>
  );
}
