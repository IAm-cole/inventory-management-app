"use client";

import React from "react";

const Header = () => {
  return (
    <div className="w-screen">
      <main className="bg-gradient-to-t from-cyan-700 to-cyan-400/50 w-full overflow-x-auto">
        <div className="border-b border-gray-300 px-6 h-24 flex items-center justify-between shadow-xl">
          <header className="font-semibold">
            <h1 className="text-3xl uppercase md:text-center">Inventory</h1>
          </header>
        </div>
      </main>
    </div>
  );
};

export default Header;
