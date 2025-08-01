import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/debros-logo.png";


const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/Portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 z-50 w-full text-white bg-gray-900 shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link to="/">
          <img src={logo} alt="Debros Logo" className="h-10 md:h-12" />
        </Link>

        <nav className="flex space-x-6 text-base font-medium md:text-lg font-outfit">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-red-500 transition duration-200 ${
                location.pathname === item.path ? "text-red-500" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
