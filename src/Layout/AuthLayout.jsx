import React from "react";
import Logo from "../Shared/Logo";
import { Outlet } from "react-router";
import loogo from "../assets//authImage.png";
import { Toaster } from "sonner";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto min-h-screen ">
        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Left Side - Form */}
          <div className="flex-1">
            {/* Logo */}
            <div className="mb-8 mt-10  md:ml-22">
              <Logo></Logo>
            </div>
            <Outlet></Outlet>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex-1 flex items-center justify-center bg-[#FAFDF0] rounded-lg  md:min-h-screen">
            <div className="relative w-full max-w-md aspect-square">
              {/* Background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-sm max-h-sm bg-lime-100 rounded-full opacity-50"></div>
              </div>

              {/* Illustration container */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <img src={loogo} className="w-full h-full"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default AuthLayout;
