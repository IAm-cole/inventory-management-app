// import React, { createContext, useContext, useState, ReactNode } from "react";

// // 1. Define the shape of your context data
// // interface FilterContextType {
// //   filtered: string[];
// //   setFiltered: React.Dispatch<React.SetStateAction<string[]>>;
// // }

// // 2. Create the context with a default value of `undefined`
// const FilterContext = createContext < undefined > undefined;

// // 3. Create a provider component
// export const FilterProvider = ({ children}) => {
//   const [filteredData, setFilteredData] = useState("");

//   const handleFilteredData = () => {
//      const query = filteredData.toLowerCase();

//   return inventoryItems.filter(item =>
//     query === "" ? true : item.name.toLowerCase().includes(query)
//      setFilteredData(["example filtered data"]);
//   );

//   };

//   const value = {
//     filteredData: filteredData,
//     handleFilteredData,
//     setFilteredData,
//   };

//   return (
//     <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
//   );
// };

// // 4. Create a custom hook for easy use
// export const useFilter = () => {
//   const context = useContext(FilterContext);
//   if (!context) {
//     throw new Error("useFilter must be used within a FilterProvider");
//   }
//   return context;
// };

// test context
"use client";
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// export interface inventoryItem {
//     id: string;
//     name: string;
//     price: number;
//     category: string;
//     stock: number;
// }
// interface FilterContextType {
//     filteredData: inventoryItem[];
//     setFilteredData: React.Dispatch<React.SetStateAction<string>>;
//     search: string;
//     setSearch: React.Dispatch<React.SetStateAction<string>>;
//     handleFilteredData: () => void;
// }

const FilterContext = React.createContext(null);

export const FilterProvider = ({ children }) => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cart, setCart] = useState([]);
  const [salesHistory, setSalesHistory] = useState([]);
    console.log("cart:", cart)



    const completeSale = () => {
  const saleRecord = {
    id: uuidv4(),
    date: new Date().toISOString    (),
    items: cart,
    total: cart.reduce((sum, item) => sum + item.priceAtSale * item.quantity, 0)
    
  };

  setSalesHistory(prev => [...prev, saleRecord]);
  setCart([]); // clear cart after sale
};




  //    const handleFilteredData = (e) => {
  //   const query = e.target.value.toLowerCase().trim();
  //   setSearch(query);

  //   const filtered = inventoryItems.filter((item) =>
  //     item.name.toLowerCase().includes(query)
  //   );

  //   setFilteredData(filtered);
  // };

 

  //   const addItems = (item) => {
  //     const newItem = {
  //       ...item,

  //       id: uuidv4(),
  //       isEditing: false,
  //     };

  //     setInventoryItems((prev) => [...prev, newItem]);
  //     setItems((prev) => [...prev, newItem]);
  //   };

  useEffect(() => {
    const savedItems = localStorage.getItem("localData");
    if (savedItems) {
      const parsedItems = JSON.parse(savedItems);
      setInventoryItems(parsedItems);
     
     
     
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(inventoryItems));
  }, [inventoryItems]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, name:product.name, id:product.id, quantity: 1, priceAtSale: product.price, addedAt: new Date().toISOString() }];
    });
  };

   const deleteItems = (id) => {
    setInventoryItems(prev.filter((item)  => item.id !== id));
  };
 

    
  console.log("filtered value :", filteredData);
  console.log("inventoryItems value :", inventoryItems);

  useEffect(() => {
    if (inventoryItems.length !== 0) {
      setFilteredData(inventoryItems);
    }
  }, [inventoryItems]);

  const editItems = (id) => {
    setInventoryItems(
      filteredData.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const addItems = (item) => {
    const newItem = {
      ...item,
      id: uuidv4(),
      isEditing: false,
    };
    setInventoryItems((prev) => [...prev, newItem]);
  };

  const value = {
    addItems,
    editItems,
    filteredData,
    setFilteredData,
    deleteItems,
    setCart,
    cart,
    addToCart,
    inventoryItems,
    setInventoryItems,
    completeSale,
    salesHistory, 
    setSalesHistory,
   
   
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === null || context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
