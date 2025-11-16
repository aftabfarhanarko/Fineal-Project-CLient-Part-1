import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import "../index.css";
const MainLayout = () => {
  return (
    <div className=" bg-base-200/60">
        <div className="max-w-7xl mx-auto ">

      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
        </div>

    </div>
  );
};

export default MainLayout;
