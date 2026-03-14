"use client";

import React from "react";
import "./globals.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className="lg:w-screen min-h-screen flex flex-col justify-center items-center ">
      <div className="gap-4 mt-3 mb-2 ">
        <p className="uppercase font-bold text-2xl  ">
          Inventory Management System
        </p>
      </div>
      <div>
        <div className="w-full">
          <h1 className="flex items-center justify-center text-base uppercase font-semibold">
            Welcome to the Inventory Management App
          </h1>
          {/* <DashboardLayout>
            <Dashboard />
          </DashboardLayout> */}
        </div>

        <div className="flex flex-col items-center justify-center   mb-4">
          <p className="action-text mb-2 text-lg">
            Sign in to your account to get started.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup-login"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              Get started
            </Link>
            {/* <Link
              href="/sign-up"
              className=" text-gray-500 px-6 py-3 rounded-lg font-semibold border-2 border-cyan-500 hover:bg-cyan-200 transition-colors"
            >
              Sign up
            </Link> */}
          </div>
        </div>
      </div>

      {/* <Nav /> */}
      {/* <Link
        prefetch={false}
        href="/dashboard"
        className="font-medium bg-cyan-600 px-4 py-2 transition duration-200 sm:text-sm md:text-xl lg-text-2xl md:font-semi-bold pl-4 rounded-xl text-white mt-3"
      >
        Dashboard
      </Link>
      <SignInPage /> */}
    </div>
  );
};

export default Home;
