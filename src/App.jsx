import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Services from "<div className=";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
<Route path="/Portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
