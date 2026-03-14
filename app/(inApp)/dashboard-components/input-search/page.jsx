"use client";
import React, { useState } from "react";
import { useFilter } from "@/app/context/context";

const SearchComponent = () => {
  const { inventoryItems, setFilteredData } = useFilter();
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    value.preventDefault;
    setSearch(value);

    const query = value.toLowerCase().trim();
    const result = inventoryItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredData(result);

    console.log("result :", result);
  };

  return (
    <div className="w-60 flex gap-5 mb-3">
      <form className="flex gap-2 " action="" method="">
        <input
          type="text"
          value={search}
          placeholder="Search by product name"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:border-transparent bg-slate-50 "
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchComponent;
