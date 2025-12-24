"use client";

import React, { useEffect, useState } from "react";
import DisplayCart from "../../dashboard-components/cart-ui/page";
import SearchComponent from "../../dashboard-components/input-search/page";
import { useFilter } from "@/app/context/context";

const POS = () => {
  const {  filteredData,  addToCart } =
    useFilter();

  // const STORAGE_KEY = "localData";

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const getData = localStorage.getItem(STORAGE_KEY);
  //     if (getData) {
  //       try {
  //         const parsedData = JSON.parse(getData);
  //         setInventoryItems(parsedData);
  //       } catch (error) {
  //         console.error("Error parsing inventoryItems:", error);
  //       }
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //  const filtered = inventoryItems.filter((item) =>
  //     item.name.toLowerCase().includes("")
  //   );
  //   setInventoryItems(filtered);
  // }, []

  // );

  // const filteredItems = (searchTerm) => {
  //   const lowercasedTerm = searchTerm.toLowerCase();
  //   const filtered = inventoryItems.filter((item) =>
  //     item.name.toLowerCase().includes(lowercasedTerm)
  //   );
  //   setInventoryItems(filtered);
  // };

  return (
    <section className="min-h-screen w-full px-4 md:px-8 lg:px-16   ">
      <main className="flex flex-col justify-center items-start ">
        <div className="mt-10 max-w -[1200] flex flex-col gap-6 ">
          <div>
            <h1 className="text-base font-semibold mb-1  uppercase ">
              Sales Interface
            </h1>
          </div>

          <SearchComponent />

          {/* <input
                  type="text"
                  placeholder="Search Product"
                  className="px-6 py-2 border border-gray-300 text-xs rounded-lg focus:border-transparent"
                  onChange={() => filtered()}
                /> */}

          <div className="w-full overflow-x-auto bg-white rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="gap-4">
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
                    product name{" "}
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
                    price{" "}
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
                    no of stock{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.map((data, index) => (
                  <tr key={index}>
                    <td className="px-3 py-3 text-left text-xs font-medium text-gray-500 ">
                      {data.name}
                    </td>
                    <td className="px-3 py-3 text-left text-xs font-medium text-gray-500 text-nowrap ">
                      ₦{data.price}
                    </td>
                    <td className="px-3 py-3 text-left text-xs font-medium text-gray-500 ">
                      {data.stock}
                    </td>
                    <td className="px-3 py-3 text-left text-xs font-medium text-gray-500 ">
                      <button onClick={() =>addToCart(data)} className="bg-blue-600  text-white rounded-lg px-2 py-2 text-xs cursor-pointer ">
                        Add Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DisplayCart  />
        </div>
      </main>
    </section>
  );
};

export default POS;
