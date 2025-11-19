import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import "../index.css";
import { Toaster } from "sonner";
const MainLayout = () => {
  return (
    <div className=" bg-base-300">
        <nav className="">
          <Navbar></Navbar>
        </nav>
      <div className="max-w-7xl mx-auto px-3 md:px-0">
        <main>
          <Outlet></Outlet>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default MainLayout;
