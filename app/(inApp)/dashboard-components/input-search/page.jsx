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
        {/* <select
          className="px-6 py-2 bg-slate-50  rounded-lg hover:bg-slate-100"
          name=""
          id=""
          placeholder="All categories"
        >
          <option value="canned Drink">canned drink</option>
          <option value="bottled">bottled drink</option>
          <option value="plastic">plastic drink</option>
          <option value="product">product3 drink</option>
        </select> */}
        {/* <button onClick={handleSearch}>search</button> */}
        {/* <main className="">
          <ul>
            {value.length > 0 ? (
              items.map((user, i) => (
                <li key={i}>
                  <strong>{user.name}</strong> — ${user.price} | {user.category}{" "}
                  | Stock: {user.stock}
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </main> */}
      </form>
    </div>
  );
};

export default SearchComponent;
