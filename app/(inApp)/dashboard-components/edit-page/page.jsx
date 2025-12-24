"use client";

import React, { useState } from "react";
import { useFilter } from "@/app/context/context";

const EditProduct = ({ task }) => {
  const { filteredData, setFilteredData } = useFilter();

  const [formData, setFormData] = useState({
    name: task?.name || "",
    price: task?.price || "",
    category: task?.category || "",
    stock: task?.stock || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editTask = (updatedData, id) => {
    setFilteredData(
      filteredData.map((item) =>
        item.id === id ? { ...item, ...updatedData, isEditing: false } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(formData, task.id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mx-6 items-center m-4 space-x-4"
    >
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-38 text-sm px-1 py-1 border rounded-lg"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        className="w-38 text-sm px-1 py-1 border rounded-lg"
      >
        <option value="">Select Category</option>
        <option value="canned">canned</option>
        <option value="bottled">bottled</option>
        <option value="plastic">plastic</option>
      </select>

      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-38 text-sm px-1 py-1 border rounded-lg"
      />

      <input
        name="stock"
        type="number"
        value={formData.stock}
        onChange={handleChange}
        required
        className="w-38 text-sm px-1 py-1 border rounded-lg"
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 px-2 py-1 rounded-xl text-white text-sm"
      >
        Update item
      </button>
    </form>
  );
};

export default EditProduct;
