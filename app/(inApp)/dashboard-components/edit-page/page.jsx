"use client";

import React, { useState } from "react";
import { useFilter } from "@/app/context/context";
import { v4 as uuidv4 } from "uuid";

const EditProduct = ({ task }) => {
  const { setFilteredData, filteredData } = useFilter();

  const [formData, setFormData] = useState({
    name: task.name,
    price: task.price,
    category: task.category,
    stock: task.stock,
  });

  // const editTask = (id, updatedData) => {
  //   setInventoryItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, ...updatedData, isEditing: false } : item
  //     )
  //   );
  // };
  const editTask = (task, id) => {
    setFilteredData(

      filteredData.map((item) =>
     
        item.id === id ? { ...item,  task,  isEditing: false } : item
      
      )
   )
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(formData, task.id);
    setFormData({
      name: "",
      price: "",
      category: "",
      stock: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex mx-6 items-center m-4 space-x-4 ">
      <div className="">
         {/* <label className="text-sm font-medium text-gray-700  mb-2">
        Name of item:
      </label> */}

      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData(e.target.value)}
        required
        className="w-38 text-sm px-1 py-1 border border-gray-300 rounded-lg"
      />

      </div>
         <div>
          {/* <label className="text-sm font-medium text-gray-700 flex flex-col mb-2">
        Category:
      </label> */}
      <select
        name="category"
        value={formData.category}
        onChange={(e) => setFormData(e.target.value)}
        required
        className="w-38 text-sm  px-1 py-1 border border-gray-300 rounded-lg"
      >
        <option value="">Select Category</option>
        <option value="canned">canned</option>
        <option value="bottled">bottled</option>
        <option value="plastic">plastic</option>
      </select>

      </div>
     
      <div>
          {/* <label className="text-sm font-medium text-gray-700 flex flex-col mb-2">
        Price:
      </label> */}
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={(e) => setFormData(e.target.value)}
        required
        className="w-38 text-sm px-1 py-1 border border-gray-300 rounded-lg"
      />

      </div>

   
    

      <div>
         {/* <label className="text-sm font-medium text-gray-700 flex flex-col mb-2">
        Initial Stock:
      </label> */}
      <input
        name="stock"
        type="number"
        value={formData.stock}
        onChange={() => setFormData(e.target.value)}
        required
        className="w-38 text-sm  px-1 py-1 border border-gray-300 rounded-lg"
      />

      </div>

     

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 px-2 py-1 rounded-xl text-white text-sm text-nowrap cursor-pointer"
      >
        update item
      </button>
    </form>
  );
};

export default EditProduct;
