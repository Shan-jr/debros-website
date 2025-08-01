import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; 

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-950">
      <Header />
      <main className="flex-grow px-4 pt-20">
        <Outlet />
      </main>
      <footer className="p-4 text-center text-white bg-gray-900">
        © {new Date().getFullYear()} DeBROS Exhibitions. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
